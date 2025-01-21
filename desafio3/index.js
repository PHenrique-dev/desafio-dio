class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    atacar(){
        let ataque
        if(this.type === "mago"){
            ataque = "magia";
        }else if(this.type === "guerreiro"){
            ataque = "espada";
        }else if(this.type === "monge"){
            ataque = "artes marciais";
        }else{
            ataque = "suriken";
        }
        console.log(`O ${this.type} atacou usando ${ataque}`)
    }
}
let aboutHero = new hero("Robin", 35, "ninja")
aboutHero.atacar()