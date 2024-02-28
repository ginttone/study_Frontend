var figlet = require('figlet');

figlet('juhee KIM', function(err, data){
    if(err){
        console.log('Something..')
        console.dir(err);
        return;
    }

    console.log(data)
})