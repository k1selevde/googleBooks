import thunkMiddleware from 'redux-thunk'
import rootReducer from '../slices/index'
import {applyMiddleware, compose, createStore} from 'redux'

const devtoolsEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
	const middlewares = [thunkMiddleware]
	const middlewareEnhancer = applyMiddleware(...middlewares)

	const enhancers = [devtoolsEnhancer, middlewareEnhancer]
	const composedEnhancers = compose<any>(...enhancers)

	return createStore(rootReducer, composedEnhancers)
}

const store = configureStore();

export default store;

export type RootStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = typeof store.dispatch
