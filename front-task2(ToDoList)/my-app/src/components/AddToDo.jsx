/////controlled/////
import { useState } from "react";

export const AddToDo = ({onAdd}) => {
    const [error, setError] = useState("");
    const handleSave = () => {
        if(!text.trim()) {
            return setError("Please fill the text");
        }
       
        setError("");
        onAdd(text);
        setText("");
    }
    const [text, setText] = useState("");
    return <>
        <p>Add ToDo</p>
        {
            error && <p style={{color:"red"}} > {error}</p>
        }
        <input
            value={text}
            onChange={
                e => setText(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
    </>
}