import { shuffle } from "../utils/shuffle";

export const initialState = {
    letters: [],
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case "ADD_LETTER":
        const { letter } = action.payload;

        return {
          ...state,
          letters: [...state.letters, letter],
        };
  
      case "SHUFFLE":
        const shuffleLetters = shuffle(state.letters);
        return {
          ...state,
          letters: [...shuffleLetters],
        };
  
      default:
        return state;
    }
  }
  