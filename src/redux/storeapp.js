import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { commentReducer } from './reducers/comments.reducer';
import { postReducer } from './reducers/post.reducer';
import { userReducer } from './reducers/user.reducer';

export default function configureStore(preLoadState) {
  const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    comment: commentReducer
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    preLoadState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
