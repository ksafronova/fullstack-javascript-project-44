import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';
import { randomazer, compareAnswer, gsd } from '../src/index.js';

export default function gsdGame(tries, name) {
  for (let i = 0; i < tries; i++) {
    const numbers = randomazer(2, 1, 100);
    const correctAnswer = gsd(numbers);
    console.log(`Question: ${numbers[0]} ${numbers[1]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    console.log(compareAnswer(correctAnswer, userAnswer, name));
  }
}