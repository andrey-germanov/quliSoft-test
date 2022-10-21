import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { photosReducer } from "./photosReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { photoReducer } from "./photoReducer";

export interface IRootReducer {
  photosReducer: typeof photosReducer;
  photoReducer: typeof photoReducer;
}

const rootReducer = combineReducers({
  photosReducer,
  photoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
