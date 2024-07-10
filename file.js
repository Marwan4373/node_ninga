const fs = require('fs');
// console.log(fs);
// fs.readFile("./docs/dosc.txt", 
//     (err, datas)=>{
//         if(err){
//             console.log(err);   
//         }
//         console.log(datas.toString());

//     }
// );
// console.log('last line ');




//reading


//writing 

// fs.writeFile('./docs/test.php', '<?php echo "done";', () => {
//     console.log('file writtem');
// });

// directors
// to create amd delete a folder 
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {

        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}
//use it to delete a file   
// use fs.unlink()
 







