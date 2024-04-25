import { Button, ButtonGroup, Card, Text } from '@shopify/polaris';

function BillingComponent() {
	return (
		<div style={{ marginBottom: '15px' }}>
			<Card>
				<div style={{ marginBottom: '45px' }}>
					<Text variant="headingLg" as="h5">
						Subscription plan
					</Text>
					<div style={{ marginTop: '20px' }}>
						<Text variant="bodySm" as="p">
							You can downgrade or upgrade your subscription plan to suit your
							needs.
						</Text>
					</div>
				</div>
				<div style={{ marginBottom: '45px' }}>
					<Text variant="bodySm" as="p">
						Your current plan:
					</Text>
					<div style={{ marginTop: '15px' }}>
						<Text variant="headingLg" as="h5">
							Pay as you go
						</Text>
					</div>
				</div>
				<div style={{ marginBottom: '45px' }}>
					<Text variant="headingLg" as="h5">
						Free optimizations remaining
					</Text>
					<div style={{ marginTop: '15px' }}>
						<Text variant="bodySm" as="p">
							0
						</Text>
					</div>
				</div>
				<div style={{ marginBottom: '45px' }}>
					<Text variant="headingLg" as="h5">
						AI credits remaining
					</Text>
					<div style={{ marginTop: '15px' }}>
						<Text variant="bodySm" as="p">
							10
						</Text>
					</div>
				</div>
				<div style={{ marginBottom: '45px' }}>
					<Text variant="headingLg" as="h5">
						Next reset
					</Text>
					<div style={{ marginTop: '15px' }}>
						<Text variant="bodySm" as="p">
							2024-05-05
						</Text>
					</div>
				</div>
				<div style={{ marginBottom: '45px' }}>
					<Text variant="headingLg" as="h5">
						Extra image price:
					</Text>
					<div style={{ marginTop: '15px' }}>
						<Text variant="bodySm" as="p">
							0.03 USD
						</Text>
					</div>
				</div>
				<div style={{ marginBottom: '45px' }}>
					<Text variant="headingLg" as="h5">
						Charges this month
					</Text>
					<div style={{ marginTop: '15px' }}>
						<Text variant="bodySm" as="p">
							0 USD / 0 Images optimised
						</Text>
					</div>
				</div>
				<div style={{ marginBottom: '35px' }}>
					<ButtonGroup>
						<Button variant="primary">Upgrade</Button>
						<Button>Increase monthly cap</Button>
						<Button variant="plain">Cancel subscription</Button>
					</ButtonGroup>
				</div>
			</Card>
		</div>
	);
}

export default BillingComponent;
