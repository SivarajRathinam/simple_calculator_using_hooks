import React, {useReducer}from 'react';
import MainContext from './components/mainContext';
import Reducer,{InitialState} from './reducer/reducer';
import {ADD_TO_INPUT,REMOVE_FROM_INPUT} from './reducer/constant';

const AppProvider=(props)=>{
	const [state,dispatch] = useReducer(Reducer,InitialState)
	const addToInputValue = input =>{
		dispatch({"type":ADD_TO_INPUT,"payload":input})
	}
	const removeFromInputValue=input=>{
		dispatch({"type":REMOVE_FROM_INPUT})
	}
	return <MainContext.Provider value={{
			addToInputValue,
			removeFromInputValue,
			state
			}}>
				{props.children}
			</MainContext.Provider>
}

export default AppProvider;