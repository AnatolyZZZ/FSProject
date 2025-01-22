import { Outlet } from "react-router"
import { useSelector} from 'react-redux';
import {  RootState } from '@store/store';

const DefaultLayout : React.FC = () => {
	const {background} = useSelector<RootState, RootState['app']>(state => state.app)
	return <div className="default-layout">
		<section className="app-section" style={{ backgroundColor: background }}>
			<div className="app-container">
				<Outlet/>
			</div>
		</section>
	</div>
}

export default DefaultLayout