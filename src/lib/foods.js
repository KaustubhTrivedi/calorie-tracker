import { randBetweenDate, randFood, randNumber } from '@ngneat/falso'

const foods = [
    {
        createdAt: randBetweenDate({ from: new Date('10/07/2020'), to: new Date() }),
        foodName: randFood(),
        calories: randNumber({ min: 40, max: 300 }),
        price: randNumber({ min: 10, max: 100 })
    }, {
        createdAt: randBetweenDate({ from: new Date('10/07/2020'), to: new Date() }),
        foodName: randFood(),
        calories: randNumber({ min: 40, max: 300 }),
        price: randNumber({ min: 10, max: 100 })
    },{
        createdAt: randBetweenDate({ from: new Date('10/07/2020'), to: new Date() }),
        foodName: randFood(),
        calories: randNumber({ min: 40, max: 300 }),
        price: randNumber({ min: 10, max: 100 })
    },
    {
        createdAt: randBetweenDate({ from: new Date('10/07/2020'), to: new Date() }),
        foodName: randFood(),
        calories: randNumber({ min: 40, max: 300 }),
        price: randNumber({ min: 10, max: 100 })
    },
    {
        createdAt: randBetweenDate({ from: new Date('10/07/2020'), to: new Date() }),
        foodName: randFood(),
        calories: randNumber({ min: 40, max: 300 }),
        price: randNumber({ min: 10, max: 100 })
    },
    {
        createdAt: randBetweenDate({ from: new Date('10/07/2020'), to: new Date() }),
        foodName: randFood(),
        calories: randNumber({ min: 40, max: 300 }),
        price: randNumber({ min: 10, max: 100 })
    },
    {
        createdAt: randBetweenDate({ from: new Date('10/07/2020'), to: new Date() }),
        foodName: randFood(),
        calories: randNumber({ min: 40, max: 300 }),
        price: randNumber({ min: 10, max: 100 })
    },

]

export default foods