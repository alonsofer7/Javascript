const fs = require('fs').promises;

async function listfiles(folder){
    try{
        const files = await fs.readdir(folder);
        for(const file of files){
            console.log(file);
        }

    }
    catch(err){
        console.log(err);
    }
}

let dir = ".";

/* if(process.argv(2)){
    dir = process.argv[2];
} */

listfiles(dir);
console.log(argv)