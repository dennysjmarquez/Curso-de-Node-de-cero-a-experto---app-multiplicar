const opts = {
  opt1: {
      base:{
          demand: true,
          alias: 'b'
      },
      limite:{
          alias: 'l',
          default: 10
      }
  }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts.opt1)
    .command('crear', 'Imprime en un archivo de txt la tabla de multiplicar', opts.opt1)
    .help()
    .argv;

module.exports = {
    argv
};