//const fs = require('express'); paquetes externos de nodejs
//const fs = require('./fs'); paquetes que nosotros creamos

const argv = require('./config/yargs').argv;

const {crearArchivo, listarTablas} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
	case 'listar':
		listarTablas(argv.base, argv.limite);
	break;

	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado: ${ archivo } has sido creado!`))
			.catch(err => console.log(err));
	break;

	default:
	console.log('Comando no reconocido');
}

//console.log(argv.base);

//let base = parametro.split('=')[1]



