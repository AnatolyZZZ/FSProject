import { Outlet } from "react-router"


const EmptyLayout : React.FC = () => {
	return <div className="empty-layout">
		<section className="app-section">
			<div className="app-container">
				<Outlet/>
			</div>
		</section>
	</div>
}

export default EmptyLayout