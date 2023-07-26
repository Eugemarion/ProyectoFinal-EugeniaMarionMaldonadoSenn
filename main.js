let codmax1
let impmax1
let codmax2
let impmax2
let codmax3
let impmax3
let codmax = 0;
let impmax = 0;
function sucursal(x) {
    console.log("Sucursal", x)
    let cod = parseFloat(prompt("Ingrese codigo de vendedor, para finalizar ingrese 0"));
    while (cod != 0) {
        let tot = 0;
        let ant = cod;
        while (ant == cod) {
            let impor = parseFloat(prompt("Ingrese importe"));
            tot = tot + impor;
            cod = parseFloat(prompt("Ingrese codigo de vendedor, para finalizar ingrese 0"));
        }
        console.log("El vendedor", ant, "vendio $", tot);
        if (tot > impmax) {
            impmax = tot;
            codmax = ant;
        }
    }
    console.log("El vendedor", codmax, "tuvo mayor importe $", impmax)
}

let x = prompt("Ingrese nombre sucursal, los nombres de sucursal posible son Pandora, Florencia y Aurora, para finalizar ingrese terminado ");
while (x != 'terminado') {
    switch (x) {
        case 'Pandora':
            sucursal(x);
            codmax1 = codmax;
            impmax1 = impmax;
            break;
        case 'Florencia':
            sucursal(x);
            codmax2 = codmax;
            impmax2 = impmax;
            break;
        case 'Aurora':
            sucursal(x);
            codmax3 = codmax;
            impmax3 = impmax;
            break;
    } x = prompt("Ingrese nombre sucursal,los nombres de sucursal posible son Pandora, Florencia y Aurora, para finalizar ingrese terminado ");
}

const mejoresvendedores = [{ Nombredesucursal: "Pandora", mejorvendedor: codmax1, importemayor: impmax1 },
                           { Nombredesucursal: "Florencia", mejorvendedor: codmax2, importemayor: impmax2 },
                           { Nombredesucursal: "Aurora", mejorvendedor: codmax3, importemayor: impmax3 }];

console.table (mejoresvendedores);
if (impmax1 > impmax2) {
    console.log("El vendedor", codmax1, "de la sucursal Pandora, genero el mayor importe de $", impmax1)
}
else {
    if (impmax2 > impmax3) {
        console.log("El vendedor", codmax2, "de la sucursal Florencia, genero el mayor importe de $", impmax2)
    }
    else {
        console.log("El vendedor", codmax3, "de la sucursal Aurora, genero el mayor importe de $", impmax3)
    }
}

