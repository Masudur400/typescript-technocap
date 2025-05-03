{
    // spread operator 
    const bros1: string[] = ['masudr', 'rahman', 'rana']
    const bros2: string[] = ['ami', 'asi', 'rana']
    bros1.push(...bros2)

    const mentors1 = {
        react: 'rana',
        javascript: 'masudur',
        nodejs: 'rahman'
    }

    const mentors2 = {
        html: 'vai',
        css: 'ami',
    }

    const mentorsList = {
        ...mentors1,
        ...mentors2
    }




    // rest operator 
    const friends = (...frnd: string[]) => {
        // console.log(frnd1, frnd2, frnd3);
        frnd.forEach((fr: string) => console.log(fr))
    }

    friends('rana', 'vai', 'asi')








}