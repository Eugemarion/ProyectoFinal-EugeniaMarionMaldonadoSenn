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

let item = document.all;
console.log(item);
let vendedores = [{Nombre: "Cristian", Sucursal: "Pandora", CodVendedor: "120"},
{Nombre: "Alexia", Sucursal: "Pandora", CodVendedor: "360"},
{Nombre: "Alejandra", Sucursal: "Pandora", CodVendedor: "890"},
{Nombre: "Manuel", Sucursal: "Florencia", CodVendedor: "520"},
{Nombre: "Cristina", Sucursal: "Florencia", CodVendedor: "630"},
{Nombre: "Luis", Sucursal: "Aurora", CodVendedor: "410"},
{Nombre: "German", Sucursal: "Aurora", CodVendedor: "970"},
{Nombre: "Guillermo", Sucursal: "Aurora", CodVendedor: "460"},
{Nombre: "Sofia", Sucursal: "Aurora", CodVendedor: "160"}];

localStorage.setItem('empleados',[{Nombre: "Cristian", Sucursal: "Pandora", CodVendedor: "120"},
{Nombre: "Alexia", Sucursal: "Pandora", CodVendedor: "360"},
{Nombre: "Alejandra", Sucursal: "Pandora", CodVendedor: "890"},
{Nombre: "Manuel", Sucursal: "Florencia", CodVendedor: "520"},
{Nombre: "Cristina", Sucursal: "Florencia", CodVendedor: "630"},
{Nombre: "Luis", Sucursal: "Aurora", CodVendedor: "410"},
{Nombre: "German", Sucursal: "Aurora", CodVendedor: "970"},
{Nombre: "Guillermo", Sucursal: "Aurora", CodVendedor: "460"},
{Nombre: "Sofia", Sucursal: "Aurora", CodVendedor: "160"}]);

localStorage.setItem ('empleados', JSON.stringify(vendedores));
let imprimir =localStorage.getItem('empleados');
console.log(imprimir);

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

console.table(mejoresvendedores);
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

let sucursales = [{Nombre: "Pandora", CantidadDeVendedores: "16", CodMejorVendedorDelMes: codmax1},
{Nombre: "Florencia", CantidadDeVendedores: "12", CodMejorVendedorDelMes: codmax2},
{Nombre: "Aurora", CantidadDeVendedores: "23", CodMejorVendedorDelMes: codmax3}];

localStorage.setItem('sucursal', [{Nombre: "Pandora", CantidadDeVendedores: "16", CodMejorVendedorDelMes: codmax1},
{Nombre: "Florencia", CantidadDeVendedores: "12", CodMejorVendedorDelMes: codmax2},
{Nombre: "Aurora", CantidadDeVendedores: "23", CodMejorVendedorDelMes: codmax3}]);

localStorage.setItem ('sucursal', JSON.stringify(sucursales));

let mostrar = localStorage.getItem('sucursal');
console.log (mostrar);