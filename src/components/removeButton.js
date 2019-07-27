import React from 'react';
import {Icon,Button} from 'react-mdl';

const RemoveButton = (props)=>{
	return <Button ripple onClick={()=>{console.log('remove button clicked')}}><Icon name="backspace"/></Button>
}

export default RemoveButton;