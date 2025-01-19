import { Outlet } from "react-router"
import AlertMessage from '@components/AlertMessage';

const EmptyLayout : React.FC = () => {
	return <div className="empty-layout">
		 <AlertMessage/>
		<Outlet/>
	</div>
}

export default EmptyLayout