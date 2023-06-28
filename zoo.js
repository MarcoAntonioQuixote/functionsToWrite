//You're a zoo keeper and you have to interact with animals

/*
    example object - be sure to make some more!

    let tiger = {
        name: 'Tiger',
        age: 24,
        carnivore: true,
        sex: male,
        canReproduce: true,
        healthPercent: 80,
        action: () => {
            console.log('Tiger meows 🐯');
        }
    }

    function ideas: 

    1) Make a function that goes through all animals and separates them into different arrays (one array for carnivores, 1 array for herbivores, as if the arrays were "zones" where they could live)

    2) Make a function that heals/feeds an animal - and keeps track of an animal's food/drug intake

    3) make a function that takes in two animals to see if they can reproduce - and returns a baby if they can
*/

function randNum(min, max) {
    let num = Math.floor(Math.random() * (max - min) ) + min;
    return num;
}

