import React from 'react';
import {ADD_TO_INPUT,REMOVE_FROM_INPUT} from './constant'

export const InitialState = {
	"total":"0",
	"inputValue":"0"
}

const Reducer = (state=InitialState,action)=>{
	switch(action.type){
		case ADD_TO_INPUT:
			var value = state.inputValue + action.payload
			return {...state,"inputValue":String(value)}
		case REMOVE_FROM_INPUT:
			var value = state.inputValue.slice(0,-1)
			return {...state,"inputValue":String(value)}
		default:
			return state;
	}
}

export default Reducer;