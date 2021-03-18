function deRadianes_a_grados(radianes) {
    return radianes * (180 / Math.PI);
}
;
function deGrados_a_radianes(grados) {
    return grados * (Math.PI / 180);
}
;
function gradosDeC(lado_AC, lado_AB, gradosB) {
    return deRadianes_a_grados(Math.asin(lado_AB * Math.sin(deGrados_a_radianes(gradosB)) / lado_AC));
}
function alturaTriangulo(lado_AC, lado_AB, gradosC) {
    var gradosAnguloA = 85;
    var lado_a = leyCoseno(lado_AC, lado_AB, gradosAnguloA);
    var gradosRestar = 180 - 90 - gradosAnguloB(lado_a, lado_AC);
    console.log("gradosC", gradosC, "gradosRestar", gradosRestar);
    var nuevoGrados = gradosC - gradosRestar;
    return Math.cos(deGrados_a_radianes(nuevoGrados)) * lado_AC;
}
function leyCoseno(lado_b, lado_c, GradosAnguloA) {
    return Math.sqrt(Math.pow(lado_c, 2) + Math.pow(lado_b, 2) - 2 * lado_c * lado_b * Math.cos(deGrados_a_radianes(GradosAnguloA)));
}
function gradosAnguloB(lado_a, lado_b) {
    var gradosAnguloA = 85;
    return deRadianes_a_grados(Math.asin(lado_b * Math.sin(deGrados_a_radianes(gradosAnguloA)) / lado_a));
}
function encontrarGradosDeC(lado_AC, lado_AB) {
    var gradosAnguloA = 85;
    var lado_a = leyCoseno(lado_AC, lado_AB, gradosAnguloA);
    var gradosB = gradosAnguloB(lado_a, lado_AC);
    return gradosDeC(lado_AC, lado_AB, gradosB);
}
function encontrarLaAlturaTriangulo(lado_AC, lado_AB) {
    var gradosC = encontrarGradosDeC(lado_AC, lado_AB);
    return alturaTriangulo(lado_AC, lado_AB, gradosC);
}
