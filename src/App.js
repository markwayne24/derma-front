import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Loadable from 'react-loadable';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const AsyncLoginLayout = Loadable({
	loader: () => import('./layouts/auth'),
	loading: Loading
});

const AsyncDefaultLayout = Loadable({
	loader: () => import('./layouts/default'),
	loading: Loading
});

class App extends Component {
  render() {
    return (
			<LocaleProvider locale={enUS}>
				<Router>
					<div className="App">
						<Route exact path="/" component={AsyncLoginLayout} />
						<Route path="/dashboard" component={AsyncDefaultLayout} />
					</div>
				</Router>
			</LocaleProvider>
    );
  }
}

export default App;
