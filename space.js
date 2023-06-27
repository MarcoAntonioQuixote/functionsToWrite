//You're an astromoner - and you've got to create functions to keep us safe

/*
    example object - be sure to make some more!
    
    let jupiter = {
        name: 'Jupiter',
        size: 1000,
        isRock: false,
        moons: ['Europa','Callisto'],
        explode: () => {
            console.log('Jupiter explodes')
        }
    }

    function ideas: 

    1) Make a function that allows you to add or subtrack moons from planets based on new scientific discoveries

    2) Make a function that examines what happens when an asteroid impacts a planet; (what happens to a planet's size?, what if the asteroid is too small to do anything or too big?)

    3) Create a function that renames all of the planets not based on Roman gods but on Aztec ones? (This might mean you need to create an array before you call the function!)
*/

function randNum(min, max) {
    let num = Math.floor(Math.random() * (max - min) ) + min;
    return num;
}