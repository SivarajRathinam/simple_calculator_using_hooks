import React,{useContext} from 'react';
import {Icon,Button} from 'react-mdl';
import MainContext from './mainContext';
const RemoveButton = (props)=>{
	const {removeFromInputValue} = useContext(MainContext) 
	return <Button ripple onClick={()=>{removeFromInputValue()}}><Icon name="backspace"/></Button>
}

export default RemoveButton;