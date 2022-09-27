import { randFirstName, randGender, randNumber } from '@ngneat/falso'

const users = [
    {
        name: randFirstName(),
        age: randNumber({ min: 10, max: 65 }),
        gender: randGender(),
        averageCaloriesOfSevenDays: randNumber({ min: 1900, max: 2400 })
    },
    {
        name: randFirstName(),
        age: randNumber({ min: 10, max: 65 }),
        gender: randGender(),
        averageCaloriesOfSevenDays: randNumber({ min: 1900, max: 2400 })
    }, {
        name: randFirstName(),
        age: randNumber({ min: 10, max: 65 }),
        gender: randGender(),
        averageCaloriesOfSevenDays: randNumber({ min: 1900, max: 2400 })
    }, {
        name: randFirstName(),
        age: randNumber({ min: 10, max: 65 }),
        gender: randGender(),
        averageCaloriesOfSevenDays: randNumber({ min: 1900, max: 2400 })
    }
    , {
        name: randFirstName(),
        age: randNumber({ min: 10, max: 65 }),
        gender: randGender(),
        averageCaloriesOfSevenDays: randNumber({ min: 1900, max: 2400 })
    },{
        name: randFirstName(),
        age: randNumber({ min: 10, max: 65 }),
        gender: randGender(),
        averageCaloriesOfSevenDays: randNumber({ min: 1900, max: 2400 })
    }
    ,{
        name: randFirstName(),
        age: randNumber({ min: 10, max: 65 }),
        gender: randGender(),
        averageCaloriesOfSevenDays: randNumber({ min: 1900, max: 2400 })
    }
    ,{
        name: randFirstName(),
        age: randNumber({ min: 10, max: 65 }),
        gender: randGender(),
        averageCaloriesOfSevenDays: randNumber({ min: 1900, max: 2400 })
    }
    ,{
        name: randFirstName(),
        age: randNumber({ min: 10, max: 65 }),
        gender: randGender(),
        averageCaloriesOfSevenDays: randNumber({ min: 1900, max: 2400 })
    }
    ,{
        name: randFirstName(),
        age: randNumber({ min: 10, max: 65 }),
        gender: randGender(),
        averageCaloriesOfSevenDays: randNumber({ min: 1900, max: 2400 })
    }
]

export default users