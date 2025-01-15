import { Link } from "react-router"
const HomePage  :  React.FC = () => {
	return <div>
		<Link to='login'>Login</Link>
		<Link to='test'>Test game</Link>
	</div>
}


export default HomePage