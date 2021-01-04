import {
    Tree
} from './Tree.js';

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function insertASCII(pass) {
    pass.insert('A');
    pass.insert('B');
    pass.insert('C');
    pass.insert('D');
    pass.insert('E');
    pass.insert('F');
    pass.insert('G');
    pass.insert('H');
    pass.insert('I');
    pass.insert('J');
    pass.insert('K');
    pass.insert('L');
    pass.insert('M');
    pass.insert('N');
    pass.insert('O');
    pass.insert('P');
    pass.insert('Q');
    pass.insert('R');
    pass.insert('S');
    pass.insert('T');
    pass.insert('U');
    pass.insert('V');
    pass.insert('W');
    pass.insert('X');
    pass.insert('Y');
    pass.insert('Z');

    pass.insert('a');
    pass.insert('b');
    pass.insert('c');
    pass.insert('d');
    pass.insert('e');
    pass.insert('f');
    pass.insert('g');
    pass.insert('h');
    pass.insert('i');
    pass.insert('j');
    pass.insert('k');
    pass.insert('l');
    pass.insert('m');
    pass.insert('n');
    pass.insert('o');
    pass.insert('p');
    pass.insert('q');
    pass.insert('r');
    pass.insert('s');
    pass.insert('t');
    pass.insert('u');
    pass.insert('v');
    pass.insert('w');
    pass.insert('x');
    pass.insert('y');
    pass.insert('z');

    pass.insert('1');
    pass.insert('2');
    pass.insert('3');
    pass.insert('4');
    pass.insert('5');
    pass.insert('6');
    pass.insert('7');
    pass.insert('8');
    pass.insert('9');
    pass.insert('0');

    pass.insert('!');
    pass.insert('@');
    pass.insert('#');
    pass.insert('$');
    pass.insert('%');
    pass.insert('^');
    pass.insert('&');
    pass.insert('*');
}

function randomize(pass, length, password, passcode){
    password = pass.sort();
    while(length != 0){
        passcode.add(password.get(Math.random()));
        length--;
    }
}

function generatePassword(length) {
    var pass = new Tree();
    insertASCII(pass);
    var length = Integer.parseInt(document.getElementById("length"));
    var a = []; var b = [];
    randomize(pass, length, a, b);
    var genPass = b.toString().substring(1, 3*b.length()-1).replace(",", "");
    return genPass;
}