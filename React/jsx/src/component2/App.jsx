import React from "react";
import Header from "./Heading";
import "./App.css";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

// function createEntry (emojiTerm){
//     return (
//         <Entry 
//             key = {emojiTerm.id}
//             emoji = {emojiTerm.emoji}
//             name = {emojiTerm.name}
//             meaning = {emojiTerm.meaning}
//         />
//     );
// }

function App(){
    return (
        <div>
            <Header />
            <dl className="dictionary">
                {emojipedia.map(emojiTerm => (
                    <Entry 
                        key = {emojiTerm.id}
                        emoji = {emojiTerm.emoji}
                        name = {emojiTerm.name}
                        meaning = {emojiTerm.meaning}
                    />
                ))}
            </dl>
        </div>
    );
}

export default App;