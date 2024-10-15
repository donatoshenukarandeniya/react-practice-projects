import React from "react";
import Joke from "./Joke";
import JokeData from "./JokeData";

function App() {
    const JokeComponent = JokeData.map(joke => <Joke key={joke.id} quection={joke.quection} answer={joke.answer} 
        />
    );
    
    return (
        <div>
            {JokeComponent}
        </div>
    );
}

export default App;
