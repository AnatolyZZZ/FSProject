import Alert from '@mui/material/Alert';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import {  RootState, Dispatch, ActionsType } from '@store/store';
import { useEffect } from 'react'

const AlertMessage: React.FC = () => {
	const dispatch = useDispatch<Dispatch>();
	const {  show_alert, alert_message , alert_type } = useSelector<RootState, RootState['app']>(state => state.app, shallowEqual);
	useEffect(()=> {
		if (show_alert) setTimeout(()=> dispatch({type: ActionsType.SHOW_ALERT, payload: false}, 3000))
	}, [show_alert, dispatch])
	const classes = show_alert ? "layout-alert-wrapp layout-alert-wrapp_show" : "layout-alert-wrapp "
	return <div className={classes}><Alert severity={alert_type}>{ alert_message }</Alert></div>
}

export default AlertMessage