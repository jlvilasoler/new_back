import { engine } from 'express-handlebars';

const sethandlebars = (aplicacion: any) => {
aplicacion.engine('.hbs', engine({extname: '.hbs'}));
aplicacion.set('view engine', '.hbs');
aplicacion.set('views', process.cwd() + '/app/src/views');
console.log(process.cwd())
}

export default sethandlebars;