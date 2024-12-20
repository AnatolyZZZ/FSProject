import { ActionsType } from "../types.d"

export type AlertTypes = 'success' | 'info' | 'warning' | 'error'

export interface AppState {
    show_alert: boolean
    alert_message : string
    alert_type : AlertTypes
    api_key : string
    api_url : string
  }

  export const initialState: AppState = {
    show_alert: false,
    alert_message : '',
    alert_type : 'info',
    api_key : process.env.REACT_APP_API_KEY!,
    api_url : process.env.REACT_APP_API_URL!,
  };

  const app = (state = initialState, action : { type: ActionsType, payload: any}) : AppState => {
	const { type, payload} = action;
	switch (type) {
		case  ActionsType.SET_ALERT_MESSAGE: 
			return {...state, alert_message: payload};
		case ActionsType.SET_ALERT_SHOW:
			return {...state, show_alert: payload};
		case ActionsType.SET_ALERT_TYPE:
			return {...state, alert_type: payload};
		case ActionsType.SHOW_ALERT:
			{
				const { type = 'success', message } = payload;
				return {...state, alert_message: message, alert_type: type, show_alert: true}
			}
		default: return state
	}
  }

  export default app