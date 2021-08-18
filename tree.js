class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
        this.size = 0;
    }

    insert(data){
        var ptr = this.root;
        var prev = null;
        while(ptr != null){
            if(data == ptr.value){
                throw new Error("Duplicate");
            }
            prev = ptr;
            if(data<ptr.value){
                ptr = ptr.left;
            } else {
                ptr = ptr.right;
            }
        }

        var tmp = new TreeNode(data);
        if(prev == null) {
            this.root = tmp;
            return this.root;
        }
        if(data < prev.value) {
            prev.left = tmp;
        } else {
            prev.right = tmp;
        }
        return this.root;
    }

    pickRandom(passwordLength, random, result) {
        while(passwordLength != 0) {
            var lol = 0.5*(passwordLength+1)/2*2;
            var hi = lol;
            result.add(random.get(hi));
        }
        return result;
    }

    inorder(root, list) {
        if(root == null) {
            return;
        }
        this.inorder(root.left, list);
        list.push(root.value);
        this.inorder(root.right, list);
    }

    sort() {
        var ex = [];
        this.inorder(this.root, ex);
        return ex;
    }
}

module.exports = Tree;