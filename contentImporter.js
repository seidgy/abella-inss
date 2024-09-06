import chalk from 'chalk';

import getAutores from './directus/autor.js';
import getCategorias from './directus/categoria.js';
import getPublicacoes from './directus/publicacao.js';
import getContato from './directus/contato.js';
import getVideos from './directus/video.js';
import getFiliais from './directus/filial.js';
import getFiles from './directus/files.js';

console.log('');
console.log(chalk.green('IMPORTANTO CONTEUDO DO DIRECTUS...'));
console.log('');
console.log(chalk.green('[ AUTORES - CATEGORIAS - PUBLICACOES - CONTATO]'));

await getFiles();
getAutores();
getCategorias();
getPublicacoes();
getContato();
getVideos();
getFiliais();

