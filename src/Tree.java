import java.util.NoSuchElementException;
import java.util.ArrayList;

class BSTNode<T extends Comparable<T>>{
	public T data;
	public BSTNode<T> left;
	public BSTNode<T> right;
	public BSTNode(T data) {
		this.data = data;
		left = null;
		right = null;
	}
}

public class Tree<T extends Comparable<T>>{
	public BSTNode<T> root;
	public int size;
	
	public Tree() {
		root = null;
		size = 0;
	}
	
	public BSTNode<T> insert(T data) throws NoSuchElementException{
		BSTNode<T> ptr = root;
		BSTNode<T> prev = null;
		int c = 0;
		while(ptr != null) {
			c = data.compareTo(ptr.data);
			if(c == 0) {
				throw new NoSuchElementException("Duplicate, try again");
			}
			prev = ptr;
			if(c<0) {
				ptr = ptr.left;
			} else {
				ptr = ptr.right;
			}
		}
		
		BSTNode<T> tmp = new BSTNode<T>(data);
		if(prev == null) {
			root = tmp;
			return root;
		} 
		if(c<0) {
			prev.left = tmp;
		} else {
			prev.right = tmp;
		}
		
		return root;
	} 
	
	public static ArrayList pickRandom(int passwordLength, ArrayList random, ArrayList result) {
		while(passwordLength != 0) {
			double lol = 0.5*(passwordLength+1)/2*2;
			int hi = (int)(lol);
			result.add(random.get(hi));
		}
		return result;
	}
	
	private static <T extends Comparable<T>> void inorder(BSTNode<T> root, ArrayList<T> list) {
		if(root == null) {
			return;
		}
		inorder(root.left, list);
		list.add(root.data);
		inorder(root.right, list);
	}
	
	public ArrayList<T> sort(){
		ArrayList<T> ex = new ArrayList<T>();
		inorder(root, ex);
		return ex;
	}
	
}