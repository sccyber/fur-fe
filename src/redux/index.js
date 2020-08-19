import createSagaMiddelware from "redux-saga";
import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from './reducers'
import rootSaga from'./sagas'

// create saga middleware
const sagaMiddleware = createSagaMiddelware();

// setup dev tools
const composeEnhancers = 
    process.env.NODE_ENV !== 'production'
        && typeof window === 'object'
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                shouldHotReload: false
            })
            : compose;

const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware](...middlewares)];

// setup redux store
let store = createStore(
    rootReducer,
    composeEnhancers(...enhancers)
);

// start saga
sagaMiddleware.run(rootSaga);

export default store;

