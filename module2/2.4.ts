{
    // Generic with Interface
    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        },
        smartWatch: T;
    }

    interface PoorWatch {
        brand : string;
        model : string;
    }
    const poorDeveloper: Developer<PoorWatch> = {
        name: 'rana',
        computer: {
            brand: 'Hp',
            model: '840g8',
            releaseYear: 2025
        },
        smartWatch:{
            brand:'apple',
            model : 'kw66'
        }
    }

    type ReachWatch = {
        brand : string;
        model : string;
        display : string;
        isNew : boolean;
    }
    const poorDeveloper1: Developer<ReachWatch> = {
        name: 'rana',
        computer: {
            brand: 'Hp',
            model: '840g8',
            releaseYear: 2025
        },
        smartWatch:{
            brand:'apple',
            model : 'kw66',
            display: 'touch',
            isNew : true,
        }
    }







}