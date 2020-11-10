package logic;

import java.util.Random;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.Scanner;
import java.nio.charset.StandardCharsets;
import javax.crypto.*;
import java.util.Base64;
import java.security.Key;
import java.security.spec.InvalidKeySpecException;
import javax.crypto.spec.*;
import java.security.NoSuchAlgorithmException;
import java.security.InvalidKeyException;

import sun.misc.*;

public class RSA {

    // This RSA method includes for greater than ~BASE64

    final static SecureRandom random = new SecureRandom();
    final static BigInteger one = new BigInteger("1");
    static BigInteger n, e, d;

    // Lets first generate the key pair
    public RSA(){ //N will represent the level of encryption 
        int N = 50;
        BigInteger p = BigInteger.probablePrime(N/2, random);
        BigInteger q = BigInteger.probablePrime(N/2, random);
        BigInteger n1 = (p.subtract(one)).multiply(q.subtract(one));
        n = p.multiply(q);
        e = new BigInteger("65537"); //By common practice it should be 2^16+1
        d = e.modInverse(n1); //Private Key
    }

    public static BigInteger encrypt(BigInteger message){
        return message.modPow(e, n);
    }

    public static BigInteger decrypt(BigInteger encrpyt){
        return encrpyt.modPow(d, n);
    }

    public static BigInteger toBigInt(String message) {
        BigInteger toBigInt = new BigInteger(message.getBytes());
        System.out.println("BigInt of String" + ": " + toBigInt);
        return toBigInt;
    }

    public static String toMessage(BigInteger decrypt) {
        String newString = "";
        newString += new String(decrypt.toByteArray());
        return newString;
    } 

    // Both strong encryption and decryption are in Base64
    
    public static Key generateKey(String str) throws Exception {
        Key key = new SecretKeySpec(str.getBytes(), "EBC");
        return key;
    }
    
    public static String strongEncrypt(String str) throws Exception, NoSuchAlgorithmException, InvalidKeyException, IllegalBlockSizeException{
        Key key = generateKey(str);
        Cipher c = Cipher.getInstance("EBC");
        c.init(Cipher.ENCRYPT_MODE, key);
        byte[] enValue = c.doFinal(str.getBytes());
        String encrypted = new String(Base64.getEncoder().encode(enValue));
        return encrypted;
    }

    public static String strongDecrypt(String str) throws Exception, NoSuchAlgorithmException, InvalidKeyException, IllegalBlockSizeException{
        Key key = generateKey(str);
        Cipher c = Cipher.getInstance("EBC");
        c.init(Cipher.DECRYPT_MODE, key);
        byte[] decode = Base64.getDecoder().decode(str);
        byte[] deValue = c.doFinal(decode);
        String decrypted = new String(deValue);
        return decrypted;
    }
 
    
}