import React, { useReducer } from "react";

import Text from '../text';
import Prompter from '../prompter';

const initialState = {
    display: <Prompter />,
    mainText: "MAIN TEXTX",
    scrollIncrement: 100,
    fontSize: 3,
    mirror: false
}

const MainContext = React.createContext();


const reducer = (state, action) =>{
    console.log(state)
    console.log( `%c${action.type}, %c${action.payload}`, 'color: green', 'color: yellow');
    switch (action.type) {
        case "SET_TEXT":
            return { ...state, mainText: action.payload }
        case "SWITCH_MODE":
            if( action.payload == "t" ){
                return { ...state, display: <Text /> }
            }else{
                return { ...state, display: <Prompter /> }
            }
        case "FONT_SIZE_CHANGE":
            return { ...state, fontSize: action.payload }
        case "SCROLL_INCREMENT":
            return {...state, scrollIncrement: action.payload}
        case "MIRROR":
            return { ...state, mirror: !state.mirror }
        default:
            return state;
    }
}

const Provider = (props) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MainContext.Provider value={{ state, dispatch }} >
            {props.children}
        </MainContext.Provider>
    )
}


export {
    Provider,
    MainContext
};