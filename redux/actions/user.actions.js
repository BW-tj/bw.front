import * as t from '../types'

export const login = userData => ({
	type: t.LOGIN,
	payload: userData
})

export const logout = () => ({
	type: t.LOGOUT,
})