import { GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame,  MAKE_GUESS, makeGuess } from './actions'; 

describe('MAKE_GUESS', () => {
    it('Should return the action', () => {
        const guess = 'guess';
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});


describe('RESTART_GAME', () => {
    it('Should return the action', () => {
        const correctAnswer = 34;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('GENERATE_AURAL_UPDATE', () => {
    it('Should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);

    });
});