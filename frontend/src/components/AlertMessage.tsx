import {Alert} from '@mui/material';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import {  RootState } from '@store/store';
import { AlertType } from "@store/types.d";
import {setAlertShow} from '@store/actions/app'

import './styles/AlertMessage.scss'

const getVariant = (type: AlertType) => type === 'error' ? 'filled' : 'standard'

const AlertMessage: React.FC = () => {
	const dispatch = useDispatch()
	const {  show_alert, alert_message , alert_type } = useSelector<RootState, RootState['app']>(state => state.app, shallowEqual);
	const classes = show_alert ? "layout-alert-wrapp layout-alert-wrapp_show" : "layout-alert-wrapp "
	return  <div className={classes}>
				<Alert 
					severity={ alert_type }
					variant={getVariant(alert_type)}
					onClose={() => dispatch(setAlertShow(false)) }
				>
					{ alert_message }
				</Alert>
			</div>
}

export default AlertMessage