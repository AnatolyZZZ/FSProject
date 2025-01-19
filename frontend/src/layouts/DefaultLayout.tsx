import { Outlet } from "react-router"
import AlertMessage from '@components/AlertMessage';

const DefaultLayout : React.FC = () => {
	return <div className="default-layout">
		 <AlertMessage/>
		<Outlet/>
	</div>
}

export default DefaultLayout