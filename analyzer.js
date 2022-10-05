
require(stringdata) // Import everything from stringdata
require(time) // Import time to measure the time everything takes
function linear_search(container, element) { // Basic linear search
    for (string in container) { // For every string in the container
        if (string == element){ // Check if the string is the element
            return(console.log("Index: " + str(container.index(element)))) // If so, return a console.log saying where it is
        }
    }
    return(console.log("Not present!")) // If the loop finished and didn't return, the item must not be present.
}
    
function binary_search(container, element): // Basic binary search
    var bot = 0;
    var mid = 0
    top = container.length - 1
    while (bot <= top) {
        mid = (top + bot) // 2 // // Makes into an int, learned recently.
        if (container[mid] < element) { // If the element in the middle is less than
            bot = mid + 1 // Set bottom to the mid +1
        } else {
            if (container[mid] > element) { // If the element in the middle is higher than
                top = mid - 1 // Set top to the mid -1
            } else { // Otherwise you must've hit it on the head
                return(console.log("Index: " + str(mid))) // So return console.log the index
        }
    }
    return(console.log("Not present!")) // Otherwise it's not in the array if it hasn't returned yet.

function searches() {
    i = 0
    tests = ["not_here", "mzzzz", "aaaaa"]
    while (i < len(tests)) { // While loop to perform every test.
        console.log("Linear search of " + tests[i]) // console.log which thing you're testing
        startTime = time.time() // Start the timer
        linear_search(data, tests[i]) // Linear search it
        endTime = time.time() // Stop the timer
        console.log("Time: " + str(endTime - startTime) + "\n") // Display the time
        console.log("Binary search of " + tests[i]) // console.log which thing you're testing, with binary search this time
        startTime = time.time() // Start the timer
        binary_search(data, tests[i]) // Binary search it
        endTime = time.time() // Stop the timer
        console.log("Time: " + str(endTime - startTime) + "\n") // Display the time
        i += 1 // Increment the loop
    }
    exit() // Exit when finished
}
data = get_data() // Make sure you actually grab the data before performing the searches and store it somewhere.
searches() // Start the searches