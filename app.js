// Requireds
const { argv } = require('./config/yargs'),
    colors = require('colors');


// const argv2 = process.argv;

const { crearArchivo, listarTabla } = require('./multipliar/multipliar');
// console.log(argv);

let comando = argv._[0];

// console.log(comando);

switch (comando) {

    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(tabla => {

                console.log('');
                console.log('========================'.blue);
                console.log(`Tabla del ${argv.base}:`.blue);
                console.log('========================'.blue);
                console.log('');
                console.log(`${tabla}`);

            })
            .catch(err => console.error(err));

        break;
    case 'crear':

        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ` + `${archivo}`.blue))
            .catch(err => console.error(err));

        break;
    default:
        console.log('Comando no reconocido')

}

// console.log('limite', argv.limite);
// console.log(argv2);

// let parameters = argv[2];
// let base = parameters.split('=')[1];
//
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//      .catch(err => consolecl.error(clserr));