const { lcm, gcd } = require("big-integer");

function string2Bin(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i).toString(2));
    }
    return result;
}

function bin2String(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        result += String.fromCharCode(parseInt(array[i], 2));
    }
    return result;
}

function convert_original(array) {
    var result = []
    for(var i = 0; i <= array.length-1; i++){
        result.push((array[i] >>> 0).toString(2))
    }
    return bin2String(result);
}

function bin2Num(array) {
    var num = []
    for (var i = 0; i <= array.length-1; i++) {
        num.push(parseInt(array[i], 2));
    }
    return num;
}

function encrypt() {

    var bytes = string2Bin(document.getElementById("pass2encrypt").value);
    var num_representation = bin2Num(bytes);

    var p = bigInt.randBetween("0", "1e10");
    while (1) {
        if (p.isProbablePrime(1)) {
            break;
        } else {
            p = bigInt.randBetween("0", "1e10")
        }
    }
    
    var q = bigInt.randBetween("0", "1e10");
    while (1) {
        if (q.isProbablePrime(1) && !(p.equals(q))) {
            break;
        } else {
            q = bigInt.randBetween("0", "1e10")
        }
    }

    var n = p.multiply(q);

    var phi = bigInt.lcm(p.minus(1), q.minus(1));

    var e = 2;
    while(e < phi) {
        if(gcd(e, phi) == 1) {
            break;
        } else {
            e+=1;
        }
    }

    var d = bigInt(e).modPow(-1, phi);

    var encrypted_key = []
    for (var i = 0; i <= num_representation.length-1; i++) {
        encrypted_key.push(bigInt(num_representation[i]).modPow(e, n))
    }

    document.getElementById("encrypted_password").value = encrypted_key
    document.getElementById("phi").value = phi;
    document.getElementById("e").value = e;
    document.getElementById("n").value = n;
}