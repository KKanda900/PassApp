// Global Variable 
var treeCharacters = null;

function generate_password(passwordLength, charactersList) {
    var generatedPassword = [];
    while(passwordLength != 0) {
        generatedPassword.push(charactersList[Math.floor(Math.random() * charactersList.length)]);
        passwordLength--;
    }
    return generatedPassword.join('');
}

window.onload = function init() {
    var Tree = require("./tree");
    treeCharacters = new Tree();
    treeCharacters.insert('A');
    treeCharacters.insert('B');
    treeCharacters.insert('C');
    treeCharacters.insert('D');
    treeCharacters.insert('E');
    treeCharacters.insert('F');
    treeCharacters.insert('G');
    treeCharacters.insert('H');
    treeCharacters.insert('I');
    treeCharacters.insert('J');
    treeCharacters.insert('K');
    treeCharacters.insert('L');
    treeCharacters.insert('M');
    treeCharacters.insert('N');
    treeCharacters.insert('O');
    treeCharacters.insert('P');
    treeCharacters.insert('Q');
    treeCharacters.insert('R');
    treeCharacters.insert('S');
    treeCharacters.insert('T');
    treeCharacters.insert('U');
    treeCharacters.insert('V');
    treeCharacters.insert('W');
    treeCharacters.insert('X');
    treeCharacters.insert('Y');
    treeCharacters.insert('Z');

    treeCharacters.insert('a');
    treeCharacters.insert('b');
    treeCharacters.insert('c');
    treeCharacters.insert('d');
    treeCharacters.insert('e');
    treeCharacters.insert('f');
    treeCharacters.insert('g');
    treeCharacters.insert('h');
    treeCharacters.insert('i');
    treeCharacters.insert('j');
    treeCharacters.insert('k');
    treeCharacters.insert('l');
    treeCharacters.insert('m');
    treeCharacters.insert('n');
    treeCharacters.insert('o');
    treeCharacters.insert('p');
    treeCharacters.insert('q');
    treeCharacters.insert('r');
    treeCharacters.insert('s');
    treeCharacters.insert('t');
    treeCharacters.insert('u');
    treeCharacters.insert('v');
    treeCharacters.insert('w');
    treeCharacters.insert('x');
    treeCharacters.insert('y');
    treeCharacters.insert('z');

    treeCharacters.insert('1');
    treeCharacters.insert('2');
    treeCharacters.insert('3');
    treeCharacters.insert('4');
    treeCharacters.insert('5');
    treeCharacters.insert('6');
    treeCharacters.insert('7');
    treeCharacters.insert('8');
    treeCharacters.insert('9');
    treeCharacters.insert('0');

    treeCharacters.insert('!');
    treeCharacters.insert('@');
    treeCharacters.insert('#');
    treeCharacters.insert('$');
    treeCharacters.insert('%');
    treeCharacters.insert('^');
    treeCharacters.insert('&');
    treeCharacters.insert('*');

    /* const fs = require('fs')

    // Data which will write in a file.
    let data = "Learning how to write in a file."

    // Write data in 'Output.txt' .
    fs.writeFile('Output.txt', data, (err) => {

        // In case of a error throw err.
        if (err) throw err;
    }) */
}

function generate() {
    var passwordLength = parseInt(document.getElementById('length').value);
    var characterList = treeCharacters.sort();
    var generated_pass = generate_password(passwordLength, characterList);
    document.getElementById('password').value = generated_pass;
}

function savePassword() {
    const fs = require('fs');
    let website_name = document.getElementById('website').value;
    let user_name = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    let data = website_name + '\n' + user_name + '\n' + password + '\n\n';
    fs.appendFile('User_Data.txt', data, (err) => {
        if (err) throw err;
    })
}