function deRadianes_a_grados (radianes:number):number {
    return radianes * (180 / Math.PI);
};
function deGrados_a_radianes (grados:number):number {
    return grados *(Math.PI / 180);
};

function gradosDeC(lado_AC:number,lado_AB:number, gradosB:number):number{   
   return deRadianes_a_grados(Math.asin(lado_AB*Math.sin(deGrados_a_radianes(gradosB))/lado_AC))
}

function alturaTriangulo(lado_AC:number,lado_AB:number, gradosC:number):number{
    let gradosAnguloA:number = 85;
    let lado_a = leyCoseno(lado_AC,lado_AB,gradosAnguloA)
    let gradosRestar:number = 180-90-gradosAnguloB(lado_a,lado_AC)
    console.log("gradosC",gradosC,"gradosRestar",gradosRestar)
    let nuevoGrados= gradosC-gradosRestar;
    return Math.cos(deGrados_a_radianes(nuevoGrados))*lado_AC;
}
function leyCoseno(lado_b:number,lado_c:number,GradosAnguloA:number):number{
   return Math.sqrt(Math.pow(lado_c,2)+Math.pow(lado_b,2)-2*lado_c*lado_b*Math.cos(deGrados_a_radianes(GradosAnguloA)))
}


function gradosAnguloB(lado_a:number,lado_b:number):number{
    let gradosAnguloA:number = 85;
    return deRadianes_a_grados(Math.asin(lado_b*Math.sin(deGrados_a_radianes(gradosAnguloA))/lado_a))
}
function encontrarGradosDeC(lado_AC:number,lado_AB:number):number{
    let gradosAnguloA:number = 85;
    let lado_a = leyCoseno(lado_AC,lado_AB,gradosAnguloA)
    let gradosB = gradosAnguloB(lado_a,lado_AC);
    return gradosDeC(lado_AC,lado_AB, gradosB)
}
function encontrarLaAlturaTriangulo(lado_AC:number,lado_AB:number):number{
    let gradosC=  encontrarGradosDeC(lado_AC,lado_AB)
    return alturaTriangulo(lado_AC,lado_AB, gradosC)
}