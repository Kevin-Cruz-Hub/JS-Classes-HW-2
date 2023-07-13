class Governor{
    constructor(age, yearRan, state, active){
        this.age = age,
        this.yearRan = yearRan,
        this.state = state,
        this.active = active || false
    }
    static slogan(){
        console.log(`I ${this.name} declare to abolish student loans during my ${this.yearRan} run`)
    }
}
console.log(Governor.slogan())

class Person{
    constructor(state, hobby, dislike){
        this.state = state,
        this.hobby = hobby,
        this.dislike = dislike
    }
    chant1(){
        return `Free Healthcare`
    }
    chant2(){
        return `Affordable housing`
    }
    chant3(){
        return `Better resource management`
    }
}

class PostalWorker extends Person{
    constructor(name, state){
        super(state),
        this.job = 'Postal Worker',
        this.name = name
    }
    statement(){
        return `My name is ${this.name}, I am a ${this.job} from ${this.state}, and I support ${super.chant1()}`
    }
    statement2(){
        return `My name is ${this.name}, I am a ${this.job} from ${this.state}, and I support ${super.chant2()}`
    }
}

const PW1 = new PostalWorker("Gerald", "NY")
const PW2 = new PostalWorker("Sandy", "CT")
console.log(PW1.statement())
console.log(PW2.statement2())

class Chef extends Person{
    constructor(name, state){
        super(state),
        this.job = 'Chef',
        this.name = name
    }
    statement(){
        return `My name is ${this.name}, I am a ${this.job} from ${this.state}, and I support ${super.chant1()}`
    }
    statement2(){
        return `My name is ${this.name}, I am a ${this.job} from ${this.state}, and I support ${super.chant3()}`
    }
}

const Chef1 = new Chef("Gerald", "Florida")
const Chef2 = new Chef("Sandy", "Virginia")
console.log(Chef1.statement())
console.log(Chef2.statement2())