import { Route, BrowserRouter, Routes } from "react-router"
import {routes}  from './routes'

import DefaultLayout from 'layouts/DefaultLayout'
import EmptyLayout from 'layouts/EmptyLayout'

const layoutVocabulary = {
	empty: EmptyLayout,
	default: DefaultLayout
}


const AppRouter : React.FC = () => {
	return (
	<BrowserRouter>
		<Routes>
			{routes.map(({ path, layout, element: Component}) => (
				<Route path='/' key={path} element={ (layoutVocabulary[layout] || layoutVocabulary.default)({})}>
					<Route path={path} element={<Component/>}/>
				</Route>
			))}
		</Routes>
	</BrowserRouter>)
}

export default AppRouter

