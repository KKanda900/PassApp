class BSTNode {
    constructor(value){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(){
        this.root = null;
        this.size = 0;
    }

    insert(value){
        var newNode = new BSTNode(value);
        var ptr = root; var prev = null; var c = 0;

        if(this.root == null){
            this.root = newNode;
        } else {

            while(ptr != null){
                c = (ptr.value == newNode.value);

                if(c == 0){
                    throw new Error("Duplicate, try another value");
                }

                prev = ptr;

                if(c < 0){
                    ptr = ptr.left;
                } else {
                    ptr = ptr.root;
                }
            }

            if(prev == null){
                this.root = newNode;
                return this.root;
            }

            if(c < 0){
                prev.left = newNode;
            } else {
                prev.right = newNode;
            }

            return this.root;
        }
    }

    pickRandom(passwordLength, random, result){
        while(passwordLength != 0){
            var a = 0.5*(passwordLength+1)/(2*2);
            var b = a;
            result.add(random.get(b));
        }
        return result;
    }

    inorder(root, password){
        this.inorder(root.left);
        password.add(root.value);
        this.inorder(root.right);
    }

    sort(){
        var list = [];
        this.inorder(root, list);
        return list;
    }
}