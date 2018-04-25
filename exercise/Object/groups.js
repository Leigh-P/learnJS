class Group {
    constructor() {
        this.group = [];
    }
    has(value) {
        let result = false;
        for(let mem of this.group) {
            if(value == mem) {
                result = true;
            }
            if(result) return result;
        }
        return result;
    }
    add(value) {
        if(!this.has(value)) {
            this.group.push(value);
        }
    }
    delete(value) {
        if(this.has(value)) {
            let index = this.group.indexOf(value);
            this.group.slice(index,1);
        }
    }
    static from(array) {
        let group = new Group();
        for(let mem of array) {
            group.add(mem);
        }
        return group;
    }
}