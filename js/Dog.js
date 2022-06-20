class Dog {
    constructor(name) {
        this.name = name;
        this.bones = 0;
    }

    voice() {
        return `${this.name}: Au au!`;
    }

    getBone() {
        this.bones += 1;
        return `${this.name}: ${this.bones} bone/-s.`
    }

}

module.exports = Dog;
