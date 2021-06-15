function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function something(){
    const fs = require('fs')

    fs.readFile('Input.txt', (err, data) => {
        if (err) throw err;

        console.log(data.toString());
    })
}