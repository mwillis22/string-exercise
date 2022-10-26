function parseAndDisplayName (name) {
    let space = name.indexOf(' ');
    let firstName = name.substring(0, space);
    let lastName = name.substring(space + 1);
    console.log(firstName, lastName, name);
}

parseAndDisplayName('Robert DeNiro');



// console.log('the script tag werks');
// let fullName = "Kevin Ruse";
// console.log(`the variable fullName is: ${fullName}`);
// let space = fullName.indexOf(' ');
// console.log(space); //?
// let fName = fullName.substring(0, space);
// console.log(fName);
// let lastName = fullName.substring(space);
// console.log(lastName);