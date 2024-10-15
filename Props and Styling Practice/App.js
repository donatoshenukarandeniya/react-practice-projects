import React from "react";
import Joke from "./Joke"

function App(){
    return(
        <div>
            <Joke 
                // quection = "Why don't skeletons fight each other?" 
                answer = "They don't have the guts!"
            />
            
            <Joke 
                quection = "Why did the math book look sad?" 
                answer = "Because it had too many problems."
            />
            
            <Joke 
                quection = "Why can't you give Elsa a balloon?" 
                answer = "Because she’ll let it go!"
            />
            
            <Joke 
                quection = "Why did the scarecrow win an award?" 
                answer = "Because he was outstanding in his field!"
            />
            
            <Joke 
                quection = "What do you call fake spaghetti?" 
                answer = "An impasta!"
            />
        </div>
    );
}

export default App;