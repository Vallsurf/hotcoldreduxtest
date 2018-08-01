import reducer from './reducer'; 
import { restartGame, makeGuess } from './actions';


describe('reducer', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
    });

    it('Should return current state when unknown type', () => {
        let currentState = {}; 
        const state = reducer(currentState, {type: '__UKNOWN'})
        expect(state).toEqual(currentState);
    });
})


describe('restart game', () => {

    it('Should restart game', () => {
        let fakeState = {
            guesses: [1,2,3,4], 
            feedback: 'Try again!',
            correctAnswer: 5 
        }
        const correctAnswer = 10; 
        const state = reducer(fakeState, restartGame(correctAnswer));
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toEqual(correctAnswer);
    });


})

describe('makeGuess', () => {
    it('Should make a guess', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 100
        };

        state = reducer(state, makeGuess(25));
        expect(state.guesses).toEqual([25]);
        expect(state.feedback).toEqual("You're Ice Cold...");

        state = reducer(state, makeGuess(60));
        expect(state.guesses).toEqual([25, 60]);
        expect(state.feedback).toEqual("You're Cold...");

        state = reducer(state, makeGuess(80));
        expect(state.guesses).toEqual([25, 60, 80]);
        expect(state.feedback).toEqual("You're Warm.");

        state = reducer(state, makeGuess(95));
        expect(state.guesses).toEqual([25, 60, 80, 95]);
        expect(state.feedback).toEqual("You're Hot!");

        state = reducer(state, makeGuess(100));
        expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
        expect(state.feedback).toEqual('You got it!');
    });
});