import { useReducer, useState } from 'react';
import { initialState, reducer } from "./services/letters";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');


  const handleChange = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  const handleLetter = () => {
    if (!/^[A-Z]$/.test(inputValue)) {
      setError("Veuillez entrer une seule lettre majuscule");
      return;
    }

    if (state.letters.includes(inputValue)) {
      setError("Cette lettre est déjà dans la liste");
      return;
    }
  
    dispatch({ type: "ADD_LETTER", payload: { letter: inputValue } });
    setInputValue('');
    setError('');
  };

  const handleShuffle = () => {
    dispatch({ type: "SHUFFLE" });
  };

  return (
    <div className="App">
      <h2>Liste des lettres</h2>
      <input 
        type="text" 
        value={inputValue} 
        maxLength="1"
        onChange={handleChange} 
        placeholder="Tapez une lettre" 
      />
      <button disabled={!inputValue.length > 0} onClick={handleLetter}>Ajouter</button>
      <button onClick={handleShuffle}>Mélanger</button>

      {error && <p>{error}</p>}

      <ul>
        {state.letters.map((letter, i) => (
          <li key={i}>{letter}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
