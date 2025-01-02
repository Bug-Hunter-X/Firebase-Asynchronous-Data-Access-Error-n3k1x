# Firebase Asynchronous Data Access Error
This repository demonstrates a common error in Firebase applications where developers attempt to access data from a document snapshot before the data is fully loaded.  This usually happens when asynchronous operations are not handled properly.  The `bug.js` file shows the erroneous code, and `bugSolution.js` provides the correct solution.

**Problem:**
Attempting to access properties of a document snapshot before the `get()` promise resolves will lead to undefined values and potential errors.

**Solution:**
Use the `.then()` method of the promise to ensure the data is fully loaded before accessing properties.