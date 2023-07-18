// code your solution here


function saturdayFun (activity="roller-skate") {
    console.log (`This Saturday, I want to ${activity}`);
    return `This Saturday, I want to ${activity}!`
}
saturdayFun ();

const mondayWork = function (activity="go to the office") {
    console.log(`This Monday, I will ${activity}`);
    return `This Monday, I will ${activity}.`;
}
mondayWork ("work from home")

function wrapAdjective (visualFlair = '*') {
    const innerFunction = function (name="special") {
        return `You are ${visualFlair}${name}${visualFlair}!`
    }
    return innerFunction;
}
console.log (wrapAdjective ("*") ("special"))

