import { Outlet } from "react-router"

const DefaultLayout : React.FC = () => {
	return <div className="default-layout">
		<Outlet/>
	</div>
}

export default DefaultLayout