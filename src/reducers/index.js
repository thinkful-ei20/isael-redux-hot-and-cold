import {MAKE_GUESS, RESTART_GAME, GENERATE_AURAL_UPDATE} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const crudReducer = (state = initialState, action) => {
    if(action.type === MAKE_GUESS){
        return {
            ...state,
            guesses: [...state.guesses, action.guess]
        }
    }
    else if(action.type === RESTART_GAME){
        return {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: Math.round(Math.random() * 100) + 1
        }
    }
    else if(action.type === GENERATE_AURAL_UPDATE){
        return {
            ...state,
            auralStatus: action.message
        }
    }
}