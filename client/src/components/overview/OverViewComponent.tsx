import OptimizationCard from './OptimizationCard';
import ConvertCard from './ConvertCard';
import AdvanceImgCard from './AdvanceImgCard';

function OverViewComponent() {
	return (
		<div
			style={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				gap: '30px',
				marginBottom: '30px',
			}}
		>
			<OptimizationCard />
			<ConvertCard />
			<AdvanceImgCard />
		</div>
	);
}

export default OverViewComponent;
