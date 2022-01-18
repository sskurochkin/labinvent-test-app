import { configureStore} from "@reduxjs/toolkit";
import { apiMethod } from "../api/apiMethod";



const store = configureStore({
	reducer: { [apiMethod.reducerPath]: apiMethod.reducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiMethod.middleware),
	devTools: process.env.NODE_ENV !== "production", //включение devtools только для разработки
});

export default store;