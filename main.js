/* The following JavaScript file will takes an array of integers passed into
the command line and converts them into an array of strings representing the
phonetic equivalent of the integer. Note: If there are no integers passed in,
the file will print nothing. If invalid arguments are passed in, this file
will likely throw an exception.

Example: If the following array is inputted, [20, 30, 40], we can expect the
following result of "TwoZero, ThreeZero, FourZero" with that exact spacing.
*/


/* We obtain the arguments passed in via the command line through this call.
Note: The first two arguments are the script's interpreter and path so we ignore those. */
var myArgs = process.argv.slice(0);


//If the length is greater than 2, that means there are numbers passed in. 
if (myArgs.length > 2) {
    var message = "";


    //The argument will be located at index 2.
    for (let x = 2; x < myArgs.length; x++) {
        let currNum = myArgs[x].toString();

        

        //The last number which is converted to a number doesn't get a comma after.
        if (x != myArgs.length - 1) {
            message += ", ";
        }
    }

    console.log(message);
}





