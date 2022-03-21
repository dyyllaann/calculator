# calculator
A calculator app designed to meet the requirements provided by The Odin Project. 

See full assignment at <a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator" target="_blank" rel="noreferrer noopener">The Odin Project</a>

LIVE: <a href="https://dyyllaann.github.io/calculator/" target="_blank" rel="noreferrer noopener">dyyllaann.github.io/calculator</a>

<h2>Introduction</h2>
This is the final project of the JavaScript portion of the Foundations course. 
This project was surprisingly challenging due to TOP requiring the calculator to disregard typical order of operations. 
It required me to push against conventional logic and think outside the box, which was a valuable exercise. 

<h2>Skills</h2>
JavaScript <br />
CSS <br />
HTML <br />
Responsive web design <br />

<h2>Tools</h2>
VSCode <br />
Git / GitHub <br />

<h2>Resources</h2>
No external resources used.

<h2>Assignment</h2>
<ol>
  <li>Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
    <ol>
      <li>add</li>
      <li>subtract</li>
      <li>multiply</li>
      <li>divide</li>
    </ol>
  </li>
  <li>Create a new function <code>operate</code> that takes an operator and 2 numbers and then calls one of the above functions on the numbers.</li>
  <li>Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
    <ol>
      <li>Do not worry about wiring up the JS just yet.</li>
      <li>There should also be a display for the calculator, go ahead and fill it with some dummy numbers so you can get it looking right.</li>
      <li>Add a “clear” button.</li>
    </ol>
  </li>
  <li>Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.</li>
  <li>Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then <code>operate()</code> on them when the user presses the “=” key.
    <ol>
      <li>You should already have the code that can populate the display, so once <code>operate()</code> has been called, update the display with the ‘solution’ to the operation.</li>
      <li>This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.</li>
    </ol>
  </li>
  <li>Gotchas: watch out for and fix these bugs if they show up in your code:
    <ol>
      <li>Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, <code>12 + 7 - 5 * 3 =</code> should yield <code>42</code>. An example of the behavior we’re looking for would be <a href="https://mrbuddh4.github.io/calculator/" target="_blank" rel="noreferrer">this student solution</a>.</li>
      <li><strong>Your calculator should not evaluate more than a single pair of numbers at a time.</strong> Example: you press a number button (<code>12</code>), followed by an operator button (<code>+</code>), a second number button (<code>7</code>), and finally a second operator button (<code>-</code>). Your calculator should then do the following: first, evaluate the first pair of numbers (<code>12 + 7</code>), second, display the result of that calculation (<code>19</code>), and finally, use that result (<code>19</code>) as the first number in your new calculation, along with the next operator (<code>-</code>).</li>
      <li>You should round answers with long decimals so that they don’t overflow the screen.</li>
      <li>Pressing <code>=</code> before entering all of the numbers or an operator could cause problems!</li>
      <li>Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”</li>
      <li>Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!</li>
    </ol>
  </li>
  <li>EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a <code>.</code> button and let users input decimals! Make sure you don’t let them type more than one though: <code>12.3.56.5</code>. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)</li>
  <li>EXTRA CREDIT: Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.</li>
  <li>EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.</li>
  <li>EXTRA CREDIT: Add keyboard support!</li>
</ol>
