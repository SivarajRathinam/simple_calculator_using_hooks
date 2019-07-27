import React,{useContext} from 'react';
import {Textfield} from 'react-mdl';

const Display=(props)=>{
	return <Textfield inputClassName="calc-display" label="" value={props.value} disabled/>
}

export default Display