# WeekendChallenge3
Server Logic & Client Functionality
IMPORTANT: The logic for the calculator needs to be housed on the Server.

The Client will take in the values (via 2 input fields) and the type of mathematical operation (selected using a button on the DOM). Each numerical value and the mathematical operator type will be bundled up in an object and then sent to the server via a POST request. So when the object leaves the Client, it should look something like this:

{
   x: 3,
   y: 4,
   type: "Add"
}
Once the Server receives it, create the logic to compute the numbers in 1 of 4 different ways: The server should be able to handle (1) addition, (2) subtraction, (3) multiplication, and (4) division. Once the result of the mathematical operation is determined, it should be sent back down to the Client where it will be displayed on the DOM.

Finally, build a clear button that resets the whole experience.
