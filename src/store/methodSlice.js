import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


const initialState = {
	method: {},
	allMethods: [],
	methodLoadingStatus: null,
	allMethodsStatus: null,
	action: 'init'
}
export const fetchMethod = createAsyncThunk(
	'method/fetchMethod',
	async function () {

		const response = await fetch('http://localhost:5000/api/v1/method/current')
		const data = await response.json()
		return data
	}
)

export const fetchDefaultMethod = createAsyncThunk(
	'method/fetchDefaultMethod',
	async function () {
		const response = await fetch('http://localhost:5000/api/v1/method/open/default.amx')
		const data = await response.json()
		return data
	}
)

export const getAllMethods = createAsyncThunk(
	'method/getAllMethods',
	async function () {
		const response = await fetch('http://localhost:5000/api/v1/method/name/saved')
		const data = await response.json()
		return data
	})

export const openSelectedMethod = createAsyncThunk(
	'method/openSelectedMethod',
	async function(name){
		console.log(name)
		const response = await fetch(`http://localhost:5000/api/v1/method/open/${name}`)
		const data = await response.json()
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
			})
			.addCase(fetchMethod.rejected, state => {
				state.methodLoadingStatus = 'error'
			})
			.addCase(fetchDefaultMethod.pending, state => {
				state.methodLoadingStatus = 'loading'
			})
			.addCase(fetchDefaultMethod.fulfilled, (state, action) => {
				state.methodLoadingStatus = 'idle';
				state.method = action.payload
			},)
			.addCase(fetchDefaultMethod.rejected, state => {
				state.methodLoadingStatus = 'error'
			})
			.addCase(getAllMethods.pending, state => {
				state.allMethodsStatus = 'loading'
			})
			.addCase(getAllMethods.fulfilled, (state, action) => {
				state.allMethodsStatus = 'idle';
				state.allMethods = action.payload
			},)
			.addCase(getAllMethods.rejected, state => {
				state.allMethodsStatus = 'error'
			})
			.addCase(openSelectedMethod.pending, state => {
				state.methodLoadingStatus = 'loading'
			})
			.addCase(openSelectedMethod.fulfilled, (state, action) => {
				state.methodLoadingStatus = 'idle';
				state.method = action.payload
			},)
			.addCase(openSelectedMethod.rejected, state => {
				state.methodLoadingStatus = 'error'
			})
	}
})

export default methodSlice.reducer