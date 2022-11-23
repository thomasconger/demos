// EMCAScript 6 Convention

class Singer {
    constructor(name, age, hits) {
        this.name = name
        this.age = age
        this.hits = ["hits"]
    }
    addHit() {
        this.hits.push("testing testing 123")
    }
}

let john = new Singer("john", 20, "first song")

console.log(john)

john.addHit()
john.addHit()

console.log(john.hits)

// EMCA SCRIPT 5 AND PRIOR CONVENTION
