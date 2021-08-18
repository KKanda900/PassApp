function string_to_num(array) {
    var result = [];
    for(var i = 0; i <= array.length-1; i++) {
        result.push((parseInt(array[i])))
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
    for (var i = 0; i <= array.length - 1; i++) {
        result.push((array[i] >>> 0).toString(2))
    }
    return bin2String(result);
}

function decrypt() {
    var encrypted_key = (document.getElementById("decrypt_encrypt").value).split(",")
    for(var i = 0; i <= encrypted_key.length-1; i++) {
        encrypted_key[i] = bigInt(encrypted_key[i]);
    }
    var phi = bigInt(document.getElementById("phi").value)
    var e = parseInt(document.getElementById("e").value)
    var n = bigInt(document.getElementById("n").value)
    var d = bigInt(e).modPow(-1, phi);

    var decrypt_key = []
    for (var i = 0; i <= encrypted_key.length - 1; i++) {
        decrypt_key.push(encrypted_key[i].modPow(d, n))
    }

    var msg = convert_original(decrypt_key)
    document.getElementById("decrypted").value = msg;
}