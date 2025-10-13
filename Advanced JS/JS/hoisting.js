console.log("I am a " + job);
var job = "Web Developer";
console.log("I am a " + job);

function whoAmI() {
  console.log("I am a " + job);
  var job = "Full Stack";
  console.log("I am a " + job);
}

whoAmI();

/*

Step 01 - Global Memory Creation Phase :
var job = undefined;
whoAmI -> function stored completely.

Step 02 - Global Execution Phase :

Now JS starts executing line by line.
1.  console.log("I am a " + job);
-> job is undefined right now (hoisted but not assigned)
output: "I am a undefined".

2.  var job = "Web Developer";
-> Now job gets the value "Web Developer".

3.  console.log("I am a " + job);
output: I am a Web Developer.

__________________________________________________

Step 03 - Function call whoAmI()

A new function execution context created for whoAmI().

Inside this context :
Memory phase again runs for the function:
-> job undefined (variables declarations are moved to the top of their scope)
Here Variable job is function scoped.
Then execution starts:
1. console.log("I am a " + job).
output: I am a undefined.
-> job is undefined hoisted.

2. var job = "Full Stack";
-> job gets the value "Full Stack";

3. console.log("I am a " + job).
output: I am a Full Stack.









*/