import { Outlet } from "react-router"

const EmptyLayout : React.FC = () => {
	return <div className="empty-layout">
		<Outlet/>
	</div>
}

export default EmptyLayout