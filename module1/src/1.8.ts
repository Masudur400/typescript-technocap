{
    // Destructuring in typescript
    const user = {
        id: 12,
        name: {
            firstName: 'Masudur',
            middleName: 'Rahman',
            lastName: 'Rana'
        },
        age: 35,
        address: 'Dhaka'
    }
    const { address, name: { lastName } } = user







}