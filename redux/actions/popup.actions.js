import * as t from '../types'

export const openPopup = content => ({
	type: t.OPEN_POPUP,
	payload: content
})

export const closePopup = () => ({
	type: t.CLOSE_POPUP
})
