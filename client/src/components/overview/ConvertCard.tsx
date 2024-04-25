import { Card, Text, Button, Banner } from '@shopify/polaris';

function ConvertCard() {
	return (
		<Card padding={'800'}>
			<div style={{ display: 'flex' }}>
				<Text variant="headingLg" as="h5">
					Convert PNG to JPG
				</Text>
			</div>
			<div style={{ marginTop: '15px' }}>
				<Text variant="bodyMd" as="p">
					Doing this can dramatically reduce the size of your images by up to
					80%
				</Text>
				<div style={{ marginTop: '20px', marginBottom: '20px' }}>
					<Banner onDismiss={() => {}}>
						<p>
							Transparent elements within PNG files will automatically be set to
							white when converted to JPG
						</p>
					</Banner>
				</div>
			</div>
			<div style={{ marginTop: '35px' }}>
				<Button variant="primary">Activate</Button>
			</div>
		</Card>
	);
}

export default ConvertCard;
