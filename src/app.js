import React from 'react';
import Layout from './components/layout';
import Calculator from './components/calculator';
import AppProvider from './appProvider'
const App = (props)=>{
	return <AppProvider>
				<Layout>
					<Calculator />
				</Layout>
			</AppProvider>
}

export default App;