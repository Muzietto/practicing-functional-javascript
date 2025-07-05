
/**
 * This function returns five different values at each invocation
 * first invocation -> 1
 * second invocation -> 2
 * third invocation -> 3
 * fourth invocation -> 4
 * fifth invocation -> 5
 * sixth invocation -> 5
 * seventh invocation -> 5
 * eighth invocation -> 5
 * ... from now on always -> 5
 * You are free to implement it in any way you like.
 * Obviously it must come with unit tests
 */
function oneToFive() {}

/**
 * This function does the same as the previous one
 * but it does it using thunks (https://www.lenovo.com/us/en/glossary/thunk/).
 * Basically, a thunk is a function that returns:
 * 1) a value
 * 2) a function to be invoked to obtain the next value
 * Obviously it must come with unit tests
 */
function oneToFiveUsingThunks() {}