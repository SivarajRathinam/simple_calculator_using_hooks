import React from 'react';
import {Button} from 'react-mdl';

const ButtonComp=(props)=>{
	return <Button ripple onClick={()=>console.log(props.value)} disabled={props.isDisabled?true:false}> {props.value} </Button>
}

export default ButtonComp;