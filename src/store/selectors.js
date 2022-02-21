export const getState = state => state
export const getMethodSelector = state => getState(state).method.method
export const getMethodList = state => getState(state).method.allMethods
export const getMethodStatus = state => getState(state).method.allMethodsStatus