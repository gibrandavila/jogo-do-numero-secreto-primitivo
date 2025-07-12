<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>


  <h3 align="center">Primitive Secret Number Game- README</h3>

  <p align="center">
  A javascript project from Alura.
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a basic number guessing game built entirely in vanilla JavaScript. It was developed to practice essential programming concepts such as control flow, random number generation, loops, conditionals, and user interaction through browser-native dialogues like alert() and prompt(). Despite its simplicity, the project offers a clear example of how JavaScript alone can power interactive behavior in a self-contained logic loop.

At the beginning of the game, the browser displays an alert box introducing the game. Behind the scenes, the program randomly generates a secret number between 1 and 100 using Math.random() and Math.floor(). This number remains hidden, and the player is prompted—via a prompt() input box—to guess the value.

Each time the user submits a guess, the input is stored in a variable and compared against the secret number. If the guess is incorrect, the game provides a contextual hint through an alert(), telling the player whether their guess was higher or lower than the correct number. This guidance allows the user to progressively narrow down the possibilities. All incorrect attempts increment a counter that tracks the number of tries.

The core gameplay is structured using a while loop, which continuously checks whether the user’s guess matches the secret number. The loop only breaks when the correct number is guessed. At that point, a final alert informs the user of their success and the total number of attempts taken, with a ternary operator used to correctly format the singular or plural word for “attempt”.

Additionally, for development purposes, the secret number and the user’s guess are logged to the console throughout the game. This made debugging easier and also served as a transparent way to verify that the logic was working as expected.

This project helped reinforce fundamental programming skills, including the use of variables, loops, conditional statements, type casting (with parseInt()), string interpolation, and user feedback mechanisms. Though it operates solely through JavaScript’s built-in dialogs, it highlights the potential of simple logic to create engaging user interactions without any additional libraries or UI frameworks.

Overall, this was a foundational exercise that strengthened my confidence in controlling program flow, managing state, and providing intuitive user feedback in a browser environment.

<!-- CONTACT -->
## Contact

Gibran Miranda Rodrigues D'avila- gibran.davila.dev@gmail.com

