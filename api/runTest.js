var path = require('path'), fs=require('fs');
const { spawn } = require('child_process');

const dir = '.\\routes';
const file = 'test.js';

function runTest(filepath, file){
    const test = __dirname + '\\' + filepath;
    console.log(`Running test: ${test}`);
    
    const node = spawn('node', [test]);

    node.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
      
    node.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    
}

function fromDir(startPath,filter){
    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath, { withFileTypes: true });
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i].name);
        var stat = fs.lstatSync(filename);
        if (files.length > 0 && files[i].name.indexOf(filter)>=0){
            runTest(filename, files[i]);
        }
        if (stat.isDirectory()){
            fromDir(filename,filter);
        }
    };
};

// Esta funcion recorre recursivamente todas las carpetas dentro de la direccion que se le da
// como input y busca los test.js que esten solos en una carpeta.

// Se corre desde la consola con: node renameIndexToFolder
fromDir(dir,file);