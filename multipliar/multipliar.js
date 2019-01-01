// Requireds
const fs = require('fs');

let listarTabla = (base, limite) =>{

    return new Promise((resolve, reject) =>{

        if (!Number(base) || 'number' !== typeof base) {

            if ('undefined' === typeof base){

                return reject(`Falta la base `);

            } else{

                return reject(`El valor introduciodo ${base} no es un número`);

            }

        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        resolve(data);

    });

};

let crearArchivo = (base, limite) =>{

    return new Promise((resolve, reject) =>{

        if (!Number(base) || 'number' !== typeof base) {

            if ('undefined' === typeof base){

                return reject(`Falta la base `);

            } else{

                return reject(`El valor introduciodo ${base} no es un número`);

            }

        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);

            resolve(`tabla-${base}.txt`);

        });

    });

};

module.exports = {
    crearArchivo,
    listarTabla
};
