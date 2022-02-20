import { configureStore} from "@reduxjs/toolkit";
import methodReducer from './methodSlice'


const stringMiddleware = () => (next) => (action) => {
	if (typeof action === 'string') {
		return next({
			type: action
		})
	}
	return next(action)
};


export default configureStore({
	reducer: {
		method: methodReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
	devTools: process.env.NODE_ENV !== 'production'
});