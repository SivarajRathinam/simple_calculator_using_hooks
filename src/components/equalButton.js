import React,{useContext} from 'react';
import {Button} from 'react-mdl'
import MainContext from './mainContext';

const EqualButton=(props)=>{
	const {doCalc} = useContext(MainContext)
	return <Button onClick={()=>{doCalc()}}>{props.value}</Button>
}
export default EqualButton;