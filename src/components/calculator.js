import React,{useContext} from 'react';
import Keypad from './keypad';
import Display from  './display';
import '../style/button.css'
import MainContext from './mainContext'

const Calculator=(props)=>{
	const {state} = useContext(MainContext)
	return <>
				<Display value={state.inputValue}/>
				<Display value={state.total}/>
				<Keypad/>
			</>
}
export default Calculator