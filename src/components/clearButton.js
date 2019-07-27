import React from 'react';
import {Icon,Button} from 'react-mdl';

const ClearComp=(props)=>{
	return <Button ripple onClick={()=>{console.log('clear Button')}}>C</Button>
}

export default ClearComp;