import React from 'react';
import {Button} from 'react-mdl'
const EqualButton=(props)=>{
	return <Button onClick={()=>{console.log(props.value)}}>{props.value}</Button>
}
export default EqualButton;