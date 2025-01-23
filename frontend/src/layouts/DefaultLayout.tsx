import { Outlet } from "react-router"
import { useSelector} from 'react-redux';
import { RootState } from '@store/store';
import ProfileMenu from "@components/ProfileMenu";

const DefaultLayout : React.FC = () => {
	const {background} = useSelector<RootState, RootState['app']>(state => state.app)
	return <div className="default-layout">
		<div className="profile-menu"><ProfileMenu/></div>
		<section className="app-section" style={{ backgroundColor: background }}>
			<div className="app-container">
				<Outlet/>
			</div>
		</section>
	</div>
}

export default DefaultLayout