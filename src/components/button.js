import React,{useContext} from 'react';
import {Button} from 'react-mdl';
import MainContext from './mainContext'

const ButtonComp=(props)=>{
	const {addToInputValue} = useContext(MainContext)
	return <Button ripple onClick={()=>addToInputValue(props.value)} disabled={props.isDisabled?true:false}> {props.value} </Button>
}

export default ButtonComp;