import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {useHttp} from "../hooks/useHttp";


const initialState = {
	method: {},
	allMethods: [],
	methodLoadingStatus: null
}
export const fetchMethod = createAsyncThunk(
	'method/fetchMethod',
	async function () {

		const response = await fetch('http://localhost:3001/api/v1/method/current')
		const data = await response.json()
		console.log(data)
		return data
	}
)

const methodSlice = createSlice({
	name: 'method',
	initialState,
	reducers: {
		//здесь должны быть действия со стейтом
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMethod.pending, state => {
				state.methodLoadingStatus = 'loading'
			})
			.addCase(fetchMethod.fulfilled, (state, action) => {
				state.methodLoadingStatus = 'idle';
				state.method = action.payload
			},)
			.addCase(fetchMethod.rejected, state => {
				state.methodLoadingStatus = 'error'
			})
	}
})

export const {methodFetching, methodFetched, methodFetchingError} = methodSlice.actions
export default methodSlice.reducer