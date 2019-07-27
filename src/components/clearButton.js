import React,{useContext} from 'react';
import {Icon,Button} from 'react-mdl';
import MainContext from './mainContext';

const ClearComp=(props)=>{
	const {resetValue} = useContext(MainContext);
	return <Button ripple onClick={()=>{resetValue()}}>C</Button>
}

export default ClearComp;