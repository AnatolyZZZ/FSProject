export enum ActionType {
	SET_ALERT_TYPE = 'SET_ALERT_TYPE',
	SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE',
	SET_ALERT_SHOW = 'SET_ALERT_SHOW',
	SET_BACKGROUND = 'SET_BACKGROUND'
}

export type AlertType = 'success' | 'info' | 'warning' | 'error'

export type Action =
	{ type: ActionType.SET_ALERT_SHOW, payload: boolean } |
	{ type: ActionType.SET_ALERT_TYPE, payload: AlertType } |
	{ type: ActionType.SET_ALERT_MESSAGE, payload: string } |
	{ type: ActionType.SET_BACKGROUND, payload: string }

