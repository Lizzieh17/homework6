////////////////////////////////////////////////////////////
//  CSCE 3193
//  Spring 2024
//  Assignment 6
//  Name: Lizzie Howell
////////////////////////////////////////////////////////////

//  You must complete the implementation of the six functions below.
//  In all cases where it is given that the arguments to a function are
//  numbers (or an array of numbers), you can assume that the correct types
//  of values are passed as arguments and don't have to check for the wrong
//  types or invalid input in the script used for testing.

////////////////////////////////////////////////////////////
//  Recursion
function reverseArray(arr) {
    if (arr.length <= 1) {
        //if the length is 1 or less return the (new) array
        return arr;
    } else {
        //set array to a recursive call where we cut off the first element everytime and then concat the array at [0]
        arr = reverseArray(arr.slice(1)).concat(arr[0]);
        return arr;
    }
}

function findMin(a) {
    //terminating condition, checks if the length is 1 or less and 
    //returns the last element left, aka the min
    if (a.length <= 1) {
        return a[0];
    } else if (a[0] < a[1]) { // or if the array is still more than 1 element, we find the min of a[0] and a[1]
        //splice to remove the a[1]
        a.splice(1, 1);
        return findMin(a);
    } else if (a[0] > a[1]) {
        //slice off a[0]
        return findMin(a.slice(1));
    }
}

function stringFromArrays(arr1, arr2) {
    //check that the lengths are the same
    if (arr1.length === arr2.length) {
        //terminating condition to end recursion, whenever the array is at its last element
        if (arr1.length <= 1) {
            return arr1 + arr2;
        } else {
            //set array and construct a string with the current first elements 
            //and then slice the two arrays to return the next elements, and so on.
            array = String(arr1[0] + arr2[0] + stringFromArrays(arr1.slice(1), arr2.slice(1)));
            return array;
        }
    } else {
        // returns string since the length are not equal and cannot perform the operation
        return "Lengths are not equal.";
    }
}

////////////////////////////////////////////////////////////
//  Higher order functions
function applyToArray(a) {
    //function to apply f (given function) to an array using map
    return function (f) {
        return "[" + a.map(f) + "]";
    };
}
function computeMaxArr(f1, f2) {
    //initlize arary
    array = [];
    //function to run through array and find the max of the answers from 2 functions
    return function runArray(a) {
        //if the array is empty, return
        if (a.length === 0) {
            return array;
        }
        //push the max of the two function evaluations
        array.push(Math.max(f1(a[0]), f2(a[0])));
        //slice array [0] off to move to the next element and recurse
        runArray(a.slice(1));
        return array;
    };
}

////////////////////////////////////////////////////////////
//  Common closure

function makeClosure() {
    let counter = 0;
    let arr = [];
    //funcs[0] and will add to array if the counter is less than 3
    function addToArrary(arg1, arg2) {
        if (counter < 3) {
            arr.push(arg1 + arg2);
        }
        return arr;
    }
    //funcs[1] to increase the counter by 1
    function increaseCounter() {
        counter++;
    }
    //returns the two functions
    return [addToArrary, increaseCounter];
}

////////////////////////////////////////////////////////////
//  Auxiliary functions (used for testing)

function mult4(i) {
    return i * 4;
}

function add2(j) {
    return j + 2;
}

function square(k) {
    return k * k;
}
