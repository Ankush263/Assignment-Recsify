import SideBar from './components/sidebar/SideBar';
import './index.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import OverViewComponent from './components/overview/OverViewComponent';
import BillingComponent from './components/billing/BillingComponent';

export default function App() {
	const [componentVal, setComponentVal] = useState('overview');

	return (
		<div>
			<div className="nav">
				<NavBar />
			</div>
			<div className="app">
				<div style={{ width: '18%' }}>
					<SideBar setComponentVal={setComponentVal} />
				</div>
				<div className="component">
					{componentVal === 'overview' ? (
						<OverViewComponent />
					) : componentVal === 'billing' ? (
						<BillingComponent />
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
}
