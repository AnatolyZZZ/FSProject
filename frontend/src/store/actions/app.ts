import { createAsyncThunk } from "@reduxjs/toolkit";
import { Action, ActionType, AlertType } from "@store/types.d";

export const setAlertType = (type: AlertType): Action => ({ type: ActionType.SET_ALERT_TYPE, payload: type });
export const setAlerMessage = (message: string): Action => ({ type: ActionType.SET_ALERT_MESSAGE, payload: message });
export const setAlertShow = (show: boolean): Action => ({ type: ActionType.SET_ALERT_SHOW, payload: show });
export const setBackground = (color: string): Action => ({ type: ActionType.SET_BACKGROUND, payload: color })

export const showAlert = createAsyncThunk(
	'app/showAlert',
	async (params: { message: string, type?: AlertType, timeout?: number }, { dispatch }) => {
		const { message, type = 'success', timeout = 25 } = params;
		const timeoutInMilliseconds = 1000 * timeout;
		if (!message) return
		dispatch(setAlertType(type));
		dispatch(setAlerMessage(message));
		dispatch(setAlertShow(true));
		setTimeout(() => dispatch(setAlertShow(false)), timeoutInMilliseconds)
	}
)