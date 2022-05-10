import React, {useRef, useEffect} from 'react';
import SendIcon from '@mui/icons-material/Send';
import CreateAPIRequest from '../api_requests/CreateAPIRequest';
import "./InputForm.css";


// InputForm will handle user input and on form submission will 
// update the user input state variable in its parent component
const InputForm = (props) => {

    
    const inputRef = useRef(null);

    //Autofocusing the form when the page loads so that the user can begin typing immediately
    useEffect(() => {
        inputRef.current.focus()
    },[])


    const handleFormSubmission = (e) => {
        e.preventDefault()
        console.log("form submission called")
        CreateAPIRequest(props.currentUserInput, props.handleAIResponseChange)
    }
    
    return(
        <div className='position'>
            <div className={"buttonRow"}>
                <button className={"buttonPresets"} onClick={() => props.handleUserInputChange("Hi there, how are you today?")}>Hi there, how are you today?</button> 
                <button className={"buttonPresets"} onClick={() => props.handleUserInputChange("Please tell me a joke!")}>Please tell me a joke!</button>
                <button className={"buttonPresets"} onClick={() => props.handleUserInputChange("What is your favorite quote?")}>What is your favorite quote?</button>
            </div>
            
            <form className={'formStyles'}>
                <input type={"text"} placeholder={"Begin your conversation here"} ref={inputRef} className={'formInput'} onChange={(e) => props.handleUserInputChange(e.target.value)} value={props.currentUserInput}></input>
                <button className={'formSubmitButton'} onClick={(e) => handleFormSubmission(e)}><SendIcon color='primary'/></button>
            </form>
        </div>
        
    )
}


export default InputForm;