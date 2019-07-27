import React, {useReducer}from 'react';
import MainContext from './components/mainContext';
import Reducer,{InitialState} from './reducer/reducer';
import {ADD_TO_INPUT,REMOVE_FROM_INPUT,DO_CALCULATION,RESET,Symbols} from './reducer/constant';

const AppProvider=(props)=>{
	const [state,dispatch] = useReducer(Reducer,InitialState)
	const addToInputValue = input =>{
		if (isValidOperation(input))
			dispatch({"type":ADD_TO_INPUT,"payload":input})
	}
	const removeFromInputValue=input=>{
		dispatch({"type":REMOVE_FROM_INPUT})
	}
	const doCalc = ()=>{
		dispatch({"type":DO_CALCULATION})
	}
	const resetValue = ()=>{
		dispatch({"type":RESET})
	}
	const getLastValue = (inputValue)=>{
		var val = inputValue.split(/[\+*\/-]/)
		if(val.length > 0){
			return val[val.length-1]
		}
		return ""
	}
	const isValidOperation = (input)=>{
		if ((Symbols.indexOf(input)!=-1) && (Symbols.indexOf(state.inputValue[state.inputValue.length-1]) !=-1)) 
			//this will blocking user from adding multiple operators continously
			return false
		if(state.inputValue == "" && input == ".")
			//this will blocking user from adding decimal point without any numbers
			return false
		if(getLastValue(state.inputValue).indexOf(".") != -1 && input == ".")
			//this will blocking user from adding multiple decimal point continously
			return false
		if(state.inputValue != 0 && Symbols.indexOf(state.inputValue[state.inputValue.length-1])!=-1 && input ==".")
			//this will blocking user from adding decimal point with opeator at the end of displayed value
			return false
		if(state.inputValue[state.inputValue.length-1] =="." && Symbols.indexOf(input) != -1)
			//this will blocking user from adding decimal point and opeator 
			return false
		return true
	}

	return <MainContext.Provider value={{
			addToInputValue,
			removeFromInputValue,
			doCalc,
			resetValue,
			state
			}}>
				{props.children}
			</MainContext.Provider>
}

export default AppProvider;