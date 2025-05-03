{
    // Interface, type vs interface

    type User1 = {
        name: string;
        age: number;
        address?: string;
    }

    interface User2 {
        name: string;
        age: number;
        address?: string;
    }

    const user1 : User1 = {
        name: 'rana',
        age: 45,
    }
    const user2 : User2 = {
        name: 'rana',
        age: 45,
    }





}