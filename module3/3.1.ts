{
    // Class and object
    class Animal {
        // name: string;
        // species: string;
        // sound: string;

        constructor(public name: string, public species: string, public sound: string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound (){
            console.log(`thie ${this.name} says ${this.sound}`);
        }

    }

    const dog = new Animal('kutta', 'dog', 'bok bok')









}