import { Link } from "react-router"
import './styles/HomePage.scss'

const HomePage  :  React.FC = () => {
	return (
		<div className="home-page">
			<div className="menu-links">
				<Link to='login' className="menu-link">Login</Link>
				<Link to='test' className="menu-link">Test game</Link>
			</div>
		</div>
	)}

export default HomePage