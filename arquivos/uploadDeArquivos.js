const fs = require ('fs');
module.exports = () => {
    
}
fs.createReadStream('./assets/salsicha.jpg')
    .pipe(fs.createWriteStream('./assets/salsicha_stream.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))