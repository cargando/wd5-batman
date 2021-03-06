import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './store/configure_store';
import roots from './router/router';
import Spinner from './components/spinner';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={ history }>
			<App>
				<Suspense fallback={ <Spinner /> }>
					{
						roots
					}
				</Suspense>
			</App>
		</ConnectedRouter>
	</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
