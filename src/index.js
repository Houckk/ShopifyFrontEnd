import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import ConversationScreen from './components/ConversationScreen';
import InputForm from './components/InputForm';
import "./index.css"


const App = () => {

    const [currentUserInput, setCurrentUserInput] = useState("");
    const [currentAIResponse, setCurrentAIResponse] = useState("");
    const [pairings, setPairings] = useState({
        questionsAndAnswers: []
    })


    const handleUserInputChange = (newInput) => {
        setCurrentUserInput(newInput);
    }
    const handleAIResponseChange = (newResponse) => {
        setCurrentAIResponse(newResponse);
    }
    const handlePairingsChange = () => {
        setPairings(prevPairingState => ({
            ...prevPairingState,
            questionsAndAnswers: [...prevPairingState.questionsAndAnswers, {question: currentUserInput, answer: currentAIResponse}]
        }))
        console.log("Updated Pairings: ", pairings.questionsAndAnswers)
    }


    useEffect(() => {
        if(currentAIResponse !== ""){
            handlePairingsChange()
        }
    },[currentAIResponse])

    return(
        <div className={'container'}>
            <h1 className={"title"}>AI Powered Chat Bot</h1>
            <InputForm
                currentUserInput={currentUserInput}
                handleUserInputChange={handleUserInputChange}
                handleAIResponseChange={handleAIResponseChange}
            />
            

            <ConversationScreen
                pairings={pairings}
            />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)