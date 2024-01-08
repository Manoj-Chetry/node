let figlet = require("figlet");

figlet("Manoj Chetry", function(err, data){
    if(err){
        console.log("Something went wrong....!");
        console.dir(err);
        return;
    }
    console.log(data);
})