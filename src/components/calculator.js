import React from 'react';
import Keypad from './keypad';
import Display from  './display';
import '../style/button.css'

const Calculator=(props)=>{
	return <>
				<Display/>
				<Display/>
				<Keypad/>
			</>
}
export default Calculator