//instanciando lib fs
const fs = require('fs');   //fs = File System

//create e read file
/*
fs.writeFile('file.txt', 'hello world Alisson Galvão', (err) => {
    if(err){
        throw err;
    }
})

fs.readFile('file.txt', (err, data) => {
    if(err){
        throw err;
    }

    console.log(data.toString('utf-8'));
})
*/

//lendo todos os arquivos do diretório
/*
fs.readdir('.', (err, data) => {
    if(err){
        throw err;
    }
    for(let dirOrFiles in data){
        console.log(data[dirOrFiles]);
    }
})
*/

//filtrando arquivos específicos (pelo tipo)
fs.readdirSync('.').filter((file) => {
    return (file.endsWith('.js'))
}).forEach((file) => {
    console.log(file)
})

