package app;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.NoSuchElementException;
import java.util.Scanner;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.Writer;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Random;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

import data_structure.Tree;
import logic.RSA;

import java.util.stream.Collectors;
import java.math.BigInteger;
import java.io.UnsupportedEncodingException;


@SuppressWarnings("unchecked")
public class PassApp extends RSA{

	//Insert into the Tree everything from letters to special characters
	public static void insert(Tree pass){
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

	public static void generate(Tree pass, int length, ArrayList<Character>password, ArrayList<Character>passcode){
		Random rand = new Random();
		password = pass.sort(); 
		while(length != 0){
			passcode.add(password.get(rand.nextInt(password.size())));
			length--;
		}
	}

	//Create the GUI for PassApp
	public static void createPassApp() throws UnsupportedEncodingException{
		// Initial setup
		JFrame frame = new JFrame("PassApp");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(255,190);
		FlowLayout flow = new FlowLayout();
 
		// Actual stuff you want to see
		JPanel panel = new JPanel();
		JLabel input = new JLabel("Enter the length of the desired password: ");
		JTextField inputBox = new JTextField(16);
		JLabel generatedPass = new JLabel("Generated Password");
		JLabel encKey = new JLabel("Generate an encryption key");
		JTextField encryptionKey = new JTextField(16);
		JButton encrypt = new JButton("Encrypt");
		JTextField password = new JTextField(16);
		JLabel decKey = new JLabel("Decrypt the key that you were provided.");
		JTextField decryptKey = new JTextField(16);
		JButton decrypt = new JButton("Decrypt");
		JLabel inst1 = new JLabel("1. To generate a password: enter a length for the password then hit enter, after you hit enter click generate.");
		JLabel inst2 = new JLabel("2. To encrypt your password: complete the first step, hit encrypt.");
		JLabel inst3 = new JLabel("3. To decrypt to find the regular message: insert the encryption key, press enter and then press decrypt.");
		JButton submit = new JButton("Generate");
 
		// Using PassApp class
		Tree pass = new Tree();
		insert(pass);
		inputBox.addActionListener( new ActionListener ()
		{
			@Override
			public void actionPerformed(ActionEvent e)
			{
				int length = Integer.parseInt(inputBox.getText());
				submit.addActionListener( new ActionListener()
				{
					@Override
					public void actionPerformed(ActionEvent e)
					{
						ArrayList<Character> a = new ArrayList<Character>(); ArrayList<Character> b = new ArrayList<Character>();
						generate(pass, length, a, b);
						String genPass = b.toString().substring(1, 3*b.size()-1).replaceAll(", ", "");
						password.setText(genPass);
					}
				});
			}
		});
		encrypt.addActionListener( new ActionListener ()
		{
			@Override
			public void actionPerformed(ActionEvent e)
			{
				String pas = password.getText();
				RSA key = new RSA();
				BigInteger message = RSA.toBigInt(pas);
				BigInteger encryptKey1 = RSA.encrypt(message);
				String version = encryptKey1.toString(1);
				encryptionKey.setText(version);
			}
		});
		decrypt.addActionListener ( new ActionListener ()
		{
			@Override 
			public void actionPerformed(ActionEvent e)
			{
				String encKey = encryptionKey.getText();
				//System.out.println(encKey);
				RSA key = new RSA();
				BigInteger encKey1 = RSA.toBigInt(encKey);
				BigInteger decrypted = RSA.decrypt(encKey1);
				String original = RSA.toMessage(decrypted);
				System.out.println(original);
				decryptKey.setText(original);
			}
		});
		
		// Adds to frame so its visible
		panel.add(input);
		panel.add(inputBox);
		panel.add(generatedPass);
		panel.add(password);
		panel.add(encKey);
		panel.add(encryptionKey);
		panel.add(decKey);
		panel.add(decryptKey);
		flow.setHgap(35);
		panel.add(submit);
		panel.add(encrypt);
		panel.add(decrypt);
		panel.add(inst1);
		panel.add(inst2);
		panel.add(inst3); 
		frame.add(panel);
		frame.setVisible(true);
	}

	public static void main(final String[] args) throws UnsupportedEncodingException{
		// Testing
		createPassApp();
	}
}
