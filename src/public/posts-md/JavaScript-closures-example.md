I am always in need of a good example of how closures work in JavaScript. So here is a really nice example from [Axel Rauschmayer](http://www.2ality.com/)

In JavaScript each function stays connected to the variables of the functions that surround it, even after it leaves the scope it was created in.

    function createIncrementor(start) {
        return function () {
            return start++;
        }
    }

The function starting in line 2 leaves the context it was created in, but stays connected to a live version of start:

    > var inc = createIncrementor(5);
    > inc()
    5
    > inc()
    6
    > inc()
    7

A closure is a function plus the connection to the variables of its surrounding scopes. What createIncrementor() returns is thus a closure.