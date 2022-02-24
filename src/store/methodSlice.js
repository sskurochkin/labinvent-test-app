import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

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
	async function (name) {
		const response = await fetch(`http://localhost:5000/api/v1/method/open/${name}`)
		const data = await response.json()
		return data
	}
)


export const saveCurrentMethod = createAsyncThunk(
	'method/save',
	async (method) => {

		const res = await fetch('http://localhost:5000/api/v1/method/save', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({method})
		}).then(res => res.json())

		console.log(res.method)
		return res.method
	}
)


const methodSlice = createSlice({
	name: 'method',
	initialState,
	reducers: {
		addRowToTable: (state, action) => {
			state.method.pressure.tableSteps = action.payload
		},

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
			.addCase(saveCurrentMethod.pending, state => {
				state.methodLoadingStatus = 'loading'
			})
			.addCase(saveCurrentMethod.fulfilled, (state, action) => {
				console.log(action.payload)
				state.methodLoadingStatus = 'idle';
				state.method = action.payload
				state.allMethods.push(action.payload.name)
			},)
		.addCase(saveCurrentMethod.rejected, state => {
			state.methodLoadingStatus = 'error'
		})
	}
})

export const {addRowToTable,} = methodSlice.actions

export default methodSlice.reducer