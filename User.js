class User {
    constructor({name, age}){
        this.name = name;
        this.age = age;
    }

    getAge(){ return this.age; }
    getName(){ return this.name; }

    setName(name){ this.name = name; }
    setAge(age){ this.age = age; } 

    [Symbol.iterator]() {
        let self = this;
        let data = Object.keys(this);
        return{
            next(){
                return({
                    done: data.length === 0,
                    value: self[data.pop()]                
                })
            }
        }
    }
}

module.exports = User;