import React,{useContext,useEffect} from 'react';
import Keypad from './keypad';
import Display from  './display';
import '../style/button.css'
import MainContext from './mainContext'

const Calculator=(props)=>{
	const symbols = ['+','-','*','/']
	const {state,doCalc} = useContext(MainContext)
	useEffect(()=>{
		let lastChar = state.inputValue[state.inputValue.length-1]
		if(symbols.indexOf(lastChar)==-1){
			doCalc()
		}
	},[state.inputValue])
	return <>
				<Display value={state.inputValue}/>
				<Display value={state.total}/>
				<Keypad/>
			</>
}
export default Calculator