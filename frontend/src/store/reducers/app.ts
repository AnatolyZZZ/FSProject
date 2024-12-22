import { ActionType, AlertType, Action } from "../types.d"

export interface AppState {
    show_alert: boolean
    alert_message : string
    alert_type : AlertType
    api_key : string | undefined
    api_url : string
    be_url: string
  }

  export const initialState: AppState = {
    show_alert: false,
    alert_message : '',
    alert_type : 'info',
    api_key : process.env.REACT_APP_API_KEY,
    api_url : process.env.REACT_APP_BE_URL!+'/api',
    be_url: process.env.REACT_APP_BE_URL!
  };

  const app = (state = initialState, action : Action) : AppState => {
	const { type, payload} = action;
	switch (type) {
		case  ActionType.SET_ALERT_MESSAGE: 
			return {...state, alert_message: payload};
		case ActionType.SET_ALERT_SHOW:
			return {...state, show_alert: payload};
		case ActionType.SET_ALERT_TYPE:
			return {...state, alert_type: payload};
		default: return state
	}
  }

  export default app