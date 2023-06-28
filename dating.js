//You're a match-making service and you're deciding what's going to make a match and what's not

/*
    example object - be sure to make some more!
    
    let batman = {
        name: 'Batman',
        income: 100000000,
        isGood: true,
        sexualOrientation: 'bisexual',
        enjoys: ['Fighting Crime','Long Walks on the Beach'],
        date: (person) => {
            console.log(`Batman asks ${person} on a date`)
        }
    }

    function ideas: 

    1) Make a function that allows you to see if two people are likely to go on a date

    2) Make a function that informs 1 person of all of their potential matches; (you should have an array of several users before running this function)

    3) Make a function that asks a user if she or he likes the qualities of another random user
*/

function randNum(min, max) {
    let num = Math.floor(Math.random() * (max - min) ) + min;
    return num;
}
