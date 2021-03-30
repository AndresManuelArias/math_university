import {Application, Router, send,RouterContext} from "https://deno.land/x/oak@v6.2.0/mod.ts";
import {  viewEngine,
    engineFactory,
    adapterFactory} from  "https://deno.land/x/view_engine@v1.4.5/mod.ts";
import {
        VariableSimple,
        metodoSimplexDual,
        resulMetodoSimplexPrimal,
        metodoSimplexprimal,
        Ecuation,
        solucionSimples
    } from "./src/programacion_lineal/index.ts";
// now setting app
const app = new Application();


// now set view engine as   EJS
const ejsEngine = await engineFactory.getEjsEngine();//https://ejs.co/

const oakAdapter = await adapterFactory.getOakAdapter();


// now passing view engine as middleware to app

app. use(viewEngine(oakAdapter, ejsEngine))

// Now we can set our router

const router = new Router();

router.get("/",async (ctx)=>{//https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
    let query = ctx.request.url.searchParams
    console.log("/")
    console.log(query.get("filas"))
    console.log(query.get("columnas"))

    ctx.render('index.ejs',{data:{filas:query.get("filas"), columnas:query.get("columnas")}})
})
.post("/", async(context:RouterContext)=>{//https://doc.deno.land/builtin/stable#URLSearchParams
    const { value } = context.request.body();
    const params  = await value;
    console.log(params)
    console.log(params.getAll("z"))
    let z:Ecuation = {sol:0,x:params.getAll("z").map((x:string)=> Number(x)*-1)} 
    let a:number[] = params.getAll("a").map(Number)

    switch (params.get("tipoSimplex")) {
        case "0":
          
            break;
        case "1":
            a = a.map(x=>x*-1)
        break;
    
        default:
            break;
    }
    console.log({z})

    console.log(params.getAll("a"))
    console.log({a})

    // let ecuation:Ecuation[]=[];
    let fila:number[] = []; 
    let filas:number[][] =[];
    do{
        if(fila.length <= z.x.length ){
            // console.log(fila.length , z.x.length)
            fila.push(a.splice(0,1)[0])
        }else{
            filas.push(fila)
            // console.log(filas)
            fila = []
        }
        // console.log({a})
    }while(a.length)
    filas.push(fila)
    fila = []
    // console.log({filas})
    let ecuations:Ecuation[] = filas.map(f=>{
        return {sol:f.slice(-1)[0],x:f.slice(0,-1)}
    })
    let matrix:VariableSimple = {z,ecuations}
    console.log({matrix})
    console.log(matrix.ecuations)
    let titulo:string = "no selecciono tipo de simplex"
    let operacion:solucionSimples = {z:0,x:[]};
   console.log("tipoSimplex:", params.getAll("tipoSimplex"))
    switch (params.get("tipoSimplex")) {
        case "0":
            titulo = "simplex primal"
            operacion = metodoSimplexprimal(matrix).solucion
            break;
        case "1":
            titulo = "simplex dual"
            operacion = metodoSimplexDual(matrix).solucion

        break;
    
        default:
            break;
    }
    console.log({operacion})
    context.response.body = //html
    `
    <!DOCTYPE html>
        <html>
        <head>
 
        </head>
        <body>
            <h1>Resultado de ${ titulo}</h1> <br>
            <p>solucion Z ${operacion.z} <p>
            
            <ul>
                ${operacion.x.map(x=>`<li> el valor de x${x.c+1} es ${x.f} </li>`)}
            </ul>
        </body>
    </html>
    `
})

// Now pass our router as a middleware to our app

app.use(router.routes());
app.use(router.allowedMethods());


app.listen({port:8000});
console.log("running")
