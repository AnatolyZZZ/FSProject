import { Outlet } from "react-router"

const DefaultLayout : React.FC = () => {
	return <div className="default-layout">
		<section className="app-section">
			<div className="app-container">
				<Outlet/>
			</div>
		</section>
	</div>
}

export default DefaultLayout