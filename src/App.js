import React, { Component } from 'react';
import ProductRecommendation from './components/ProductRecommendation';

class App extends Component {

	render() {
		return (
			<div className="App">
				<div className="AppContainer">
					<ProductRecommendation />
				</div>
			</div>
		);
	}
}

export default App;
