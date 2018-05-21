import {MAKE_GUESS, RESTART_GAME, GENERATE_AURAL_UPDATE} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const crudReducer = (state = initialState, action) => {
    if(action.type === MAKE_GUESS){
        let feedback; 
        let guess = parseInt(action.guess,10);

        if(typeof guess !== 'number'){
            feedback = 'Please enter a real number';
            
            return {
                ...state,
                feedback,
                guesses: [...state.guesses, guess]
            }
        }

        let range = Math.abs(guess - state.correctAnswer);

        if(range >= 50){
            feedback = 'You\'re Ice Cold...';
        }else if (range >= 10) {
            feedback = 'You\'re Warm.';
        } else if (range >= 1) {
            feedback = 'You\'re Hot!';
        } else {
            feedback = 'You got it!';
        }

        return {
            ...state,
            guesses: [...state.guesses, action.guess],
            feedback
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

        const { guesses, feedback} = this.state;

        const pluralize = guesses.length !== 1;

        let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

        if(guesses.length > 0){
            auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
        }

        return {
            ...state,
            auralStatus
        }
    }
    return state;
}