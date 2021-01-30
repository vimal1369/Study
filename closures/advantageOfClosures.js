// closures can be used to hide data and encapsulation 

function OuterFxn() {
    let a = 0;
    this.incrementMe = function () { // added constructors to increment closure value of variable
            a++;
            console.log('incremented', a)
    }

    this.decrementMe = function () { // added constructors to decrement closure value of variable
            a--;
            console.log('decremented', a);
    }

}

let outerFxnObj = new OuterFxn(); // need to initialise obj to access constuctors
outerFxnObj.incrementMe();
outerFxnObj.incrementMe();
outerFxnObj.decrementMe();

// here a is not accessible publically and hence it is hidden and encapsulated