import { configureStore} from "@reduxjs/toolkit";
import methodReducer from './methodSlice'

export default configureStore({
	reducer: {
		method: methodReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
	devTools: process.env.NODE_ENV !== 'production'
});