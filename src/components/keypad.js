import React from 'react';
import {Grid,Cell} from 'react-mdl';
import ButtonComp from './button'
import ClearComp from './clearButton';
import RemoveButton from './removeButton';
import EqualButton from './equalButton';

const Keypad=(props)=>{
	return <div className="keypad">
				<Grid noSpacing={true}>
					<Cell col={3} tablet={2} phone={1}><ClearComp/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="+"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="-"/></Cell>
					<Cell col={3} tablet={2} phone={1}><RemoveButton/></Cell>
				</Grid>
				<Grid noSpacing={true}>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="7"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="8"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="9"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="*"/></Cell>
				</Grid>
				<Grid noSpacing={true}>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="6"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="5"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="4"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="/"/></Cell>
				</Grid>
				<Grid noSpacing={true}>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="3"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="2"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="1"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="" isDisabled={true}/></Cell>
				</Grid>
				<Grid noSpacing={true}>
					<Cell col={6} tablet={4} phone={2}><ButtonComp value="0"/></Cell>
					<Cell col={3} tablet={2} phone={1}><ButtonComp value="."/></Cell>
					<Cell col={3} tablet={2} phone={1}><EqualButton value="="/></Cell>
				</Grid>
			</div>
}

export default Keypad