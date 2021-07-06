const nombre   = 'Jesus';
const apellido = 'Gabriel';
// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;
export function getSaludo(nombre = 'Jhonger') {
    return 'Hola ' + nombre;
}

