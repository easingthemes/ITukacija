import { fromJS } from 'immutable';
import { createStore, compose } from 'redux';
import { combineReducers } from 'redux-immutable';

import demoContainerReducer from '../containers/DemoContainer/reducer';

const initialState = fromJS({});

const rootReducer = combineReducers({
  demoPage: demoContainerReducer,
});

export default function configureStore() {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	return store;
}
