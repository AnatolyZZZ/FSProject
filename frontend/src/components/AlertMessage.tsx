import Alert from '@mui/material/Alert';
import { useSelector, shallowEqual } from 'react-redux';
import {  RootState } from '@store/store';

import './styles/AlertMessage.scss'

const AlertMessage: React.FC = () => {
	const {  show_alert, alert_message , alert_type } = useSelector<RootState, RootState['app']>(state => state.app, shallowEqual);

	const classes = show_alert ? "layout-alert-wrapp layout-alert-wrapp_show" : "layout-alert-wrapp "
	return <div className={classes}><Alert severity={ alert_type }>{ alert_message }</Alert></div>
}

export default AlertMessage