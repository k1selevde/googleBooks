import { combineReducers } from 'redux';
import bookCatalog from "./bookCatalog/bookCatalog.reducer";
import bookPage from "./bookPage/bookPage.reducer";

const rootReducer = combineReducers({
	bookCatalog,
	bookPage
});

export default rootReducer;
