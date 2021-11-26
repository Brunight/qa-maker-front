import { Routes as Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Store from '../pages/Store'

const Routes = () => (
	<Switch>
		<Route path="/" element={<Dashboard />} />
		<Route path="/stores/:storeId" element={<Store />} />
	</Switch>
)

export default Routes
