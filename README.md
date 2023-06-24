# DWA11

## content
This exerscise is to test our knowledge on the basics of Redux and Functional Programming. 
By means of completing the following user stories:
The goal is to create our own implimentation of a Redux-inspired store to manage the state of a basic counting tally app.

### SCENARIO: Increment the counter by one
- GIVEN no interactions have been performed yet.
- WHEN the “getState” method is run.
- AND the result is logged to the console.
- AND the browser console is open.
- THEN the state should show a count of 0.

### SCENARIO: Increment the counter by one

- GIVEN no interactions have been performed yet.
- WHEN an “ADD” action is dispatched.
- AND another “ADD” action is dispatched.
- AND the browser console is open.
- THEN the state should show a count of 2.

### SCENARIO: Increment the counter by one

- GIVEN the current count in the state is 2.
- WHEN a “SUBTRACT” action is dispatched.
- AND the browser console is open.
- THEN the state should display a count of 1.

### SCENARIO: Resetting the Tally Counter

- GIVEN the current count in the state is 1.
- WHEN a “RESET” action is dispatched.
- AND the browser console is open.
- THEN the state should display a count of 0.