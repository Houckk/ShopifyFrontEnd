import React from 'react';
import Avatar from '@mui/material/Avatar';
import { teal, amber } from '@mui/material/colors';
import "./ConversationScreen.css"

const ConversationScreen = (props) => {

    return(
        <div className={props.pairings.questionsAndAnswers.length > 0 ? "screenContainer" : null}>
            {props.pairings.questionsAndAnswers.map(pair => 
                <div>
                    <div className={'row'}>
                        <div className={"avatarStyles"}>
                            <Avatar sx={{ bgcolor: teal[500] }}> You </Avatar>
                        </div>
                       <div className={"textQuestion"}> {pair.question} </div>
                    </div>
                    <br/>
                    <div className={'row'}>
                        <div className={"textAnswer"}> {pair.answer} </div>
                        <div>
                            <Avatar sx={{ bgcolor: amber[500] }}> AI </Avatar>
                        </div>
                       
                    </div>
                </div>
            )}
        </div>
    )
}

export default ConversationScreen;