{
    // Inheritance in OOP

    class Parent {
        name: string
        age: number
        address: string

        constructor(name: string, age: number, address: string) {
            this.name = name
            this.age = age
            this.address = address
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }

    }

    class Student extends Parent {
        // name: string
        // age: number
        // address: string

        constructor(name: string, age: number, address: string) {
            super(name, age, address)
            // this.name = name
            // this.age = age
            // this.address = address
        }

        // getSleep(numOfHours: number) {
        //     console.log(`${this.name} will sleep for ${numOfHours}`);
        // }

    }

    const student1 = new Student('rana', 20, 'dhaka')


    class Teacher extends Parent {
        // name: string
        // age: number
        // address: string
        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            // this.name = name
            // this.age = age
            // this.address = address
            this.designation = designation
        } 

        takeClass(numOfClass:number){
            console.log(`${this.name} can take ${numOfClass}`);
        }

    }
    
    const teacher1 = new Teacher('rana', 20, 'dhaka', 'professor')





}