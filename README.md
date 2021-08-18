# <h1 align= "center"> PassApp </h1>
<div align = "center">
    <a>
    <img src="src/PassApp.jpg" width ="150">
    </a>
</div>

# How it works
Today, there are many instances of cyber attacks where hackers can easily intercept your phone, laptop, etc and steal your valuable data. Which is where PassApp comes in. PassApp allows users to create secure passwords easily and convenient. In addition, PassApp allows users to send passwords over the internet in a secure way using RSA encryption/decryption algorithms. Using ElectronJS and cryptography, PassApp is able to create a secure interface for all your password needs. 

## Data Structures Used 
PassApp utilizes a tree data structure to create a random password that can range from 0-1 million characters (or even beyond 1 million characters) in length. A tree data structure was suited to be the best option because compared to random generation it is more convenient and better in speed. In the generate password page, enter the information of the website/app you are saving the information for, enter the password length then click generate. Once you click generate, the password is saved locally to your device.

## Cryptography and Math 
PassApp utilizes the RSA encryption/decryption algorithms (Rivest-Shamir-Adleman encryption/decryption algorithms) to send your password over the internet safely. Once you created the password, in the encryption page you can paste the password in the input box which once you click encrypt it will give you encryption information that you give to the person that needs the password. Then the person that wants to know what the password is, can go to the decryption page and enter the information from the encryption page to get the password.