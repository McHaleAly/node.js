const fs= require('fs'); //file system 

 /*
 //reading files - this will fire a call back function - will take some time to do\ then files 
fs.readFile('./docs/blog1.txt',(err,data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());  // a package of data send to us console.log(data); but when 
});
    console.log('last line');  //


//writeFiles
fs.writeFile('./docs/blog1.txt','hello, again', () => {
console.log('file ws written');

});

*/
/*
//writeFiles - creates new file 
fs.writeFile('./docs/blog2.txt', 'hello, world', () => {
console.log('file ws written');

});

*/

 //directories
/*
  if (!fs.existsSync('./assets')) {  // only run if it doesn't exist
    fs.mkdir('./assets', (err)=> {
        if (err) {
        console.log(err);
    }
        console.log('folder created');
    }); 
} else {  //if it does exist then else will run
    fs.rmdir('./assets', (err)=> {
        if (err) {
            console.log(err)
        }
    
            console.log ('folder deleted');
        })
    }
    */

 //deleting files
 if(fs.existsSync('./docs/deleteme.txt',)) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}