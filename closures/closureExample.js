// this will give example of simple closure function
// which is bundled within another funcation and has
// a refrence to its lexical environemnt of inside scope

function outerFxn() {
    var a = 10; // variable 
   function innerFxn() {
        console.info('inner funcation', a); // here since it formes closure wth veriable a then it will have access to it 
    }

    return innerFxn;
}

let outerFxnCall = outerFxn();
outerFxnCall();


// case two 
function outerFxn() {
    var a = 10; // variable 
   function innerFxn() {
        console.info('inner funcation', a); // here since it formes closure wth veriable a then it will have access to it 
    }
    var a = 10; // even if the veriable is declaired later , closure will still be formed as the funcation inner has refrence with all lexical scope 
    return innerFxn;
}

let outerFxnCall = outerFxn();
outerFxnCall();

// case 3
// case two 
function outerFxn() {
    var a = 10; // variable 
   function innerFxn() {
        console.info('inner funcation', a); // here since it formes closure wth veriable a then it will have access to it 
    }
    let a = 10; // so is with the let (block scope veriable) even if the veriable is declaired later , closure will still be formed as the funcation inner has refrence with all lexical scope 
    return innerFxn;
}

let outerFxnCall = outerFxn();
outerFxnCall();