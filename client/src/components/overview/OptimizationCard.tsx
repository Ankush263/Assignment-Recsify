import { Badge, Card, Text, Button } from '@shopify/polaris';

function OptimizationCard() {
	return (
		<Card padding={'800'}>
			<div style={{ display: 'flex' }}>
				<Text variant="headingLg" as="h5">
					Automatic optimization
				</Text>
				<div style={{ marginLeft: '10px' }}>
					<Badge tone="success" progress="complete">
						Active
					</Badge>
				</div>
			</div>
			<div style={{ marginTop: '15px' }}>
				<Text variant="bodyMd" as="p">
					TinyIMG runs optimizations each day by default. However you can run
					optimizations manually if you prefer Read our FAQs for details.
				</Text>
			</div>
			<div style={{ marginTop: '35px' }}>
				<Button>Deactivate</Button>
			</div>
		</Card>
	);
}

export default OptimizationCard;
