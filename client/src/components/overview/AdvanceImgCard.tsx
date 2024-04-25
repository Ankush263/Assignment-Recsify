import { Card, Text, Button, Banner, Select } from '@shopify/polaris';
import { useCallback, useState } from 'react';

function AdvanceImgCard() {
	const [selected, setSelected] = useState('today');

	const handleSelectChange = useCallback(
		(value: string) => setSelected(value),
		[]
	);

	const options = [
		{ label: 'Do not resize', value: 'no' },
		{ label: '1350 x 1320', value: 'op1' },
		{ label: '1440 x 720', value: 'op2' },
	];

	return (
		<Card padding={'800'}>
			<div style={{ display: 'flex' }}>
				<Text variant="headingLg" as="h5">
					Advance image reduction
				</Text>
			</div>
			<div style={{ marginTop: '15px' }}>
				<Text variant="bodyMd" as="p">
					TinyIMG can significantly reduce your image size by almost three
					quaters while retaining excellent visual quality. Changes are usually
					not noticeable to the human eye.
				</Text>
				<div style={{ marginTop: '20px', marginBottom: '20px' }}>
					<Banner onDismiss={() => {}}>
						<p>You can RESIZE all images by upgrading your plan.</p>
					</Banner>
				</div>
			</div>
			<div>
				<Select
					label="Resize oversized images to:"
					options={options}
					onChange={handleSelectChange}
					value={selected}
				/>
			</div>
			<div style={{ marginTop: '35px' }}>
				<Button variant="primary">Upgrade</Button>
			</div>
		</Card>
	);
}

export default AdvanceImgCard;
