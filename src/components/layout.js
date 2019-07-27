import React from 'react';
import {Grid,Cell} from 'react-mdl'
import 'react-mdl/extra/css/material.blue-red.min.css';
import 'react-mdl/extra/material.js';

const Layout = (props) =>{
	return <Grid>
		<Cell phone={12} tablet={4} col={3} >{props.children}</Cell>
	</Grid>
}

export default Layout;