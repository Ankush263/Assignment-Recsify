import { Box, Listbox } from '@shopify/polaris';

export default function SideBar(props: {
	setComponentVal: (arg0: string) => void;
}) {
	const handleSelect = (value: string) => {
		props.setComponentVal(value);
	};
	return (
		<Box
			background="bg-surface"
			width="100%"
			borderRadius="300"
			padding={'300'}
		>
			<Listbox
				accessibilityLabel="sidebar"
				onSelect={(value) => handleSelect(value)}
			>
				<Listbox.Option value="overview">Overview</Listbox.Option>
				<Listbox.Option value="alt-text">ALT text</Listbox.Option>
				<Listbox.Option value="filename">Filename</Listbox.Option>
				<Listbox.Option value="broken-links">Broken links</Listbox.Option>
				<Listbox.Option value="seo">SEO metadata</Listbox.Option>
				<Listbox.Option value="billing">Billing information</Listbox.Option>
				<Listbox.Option value="language">Language</Listbox.Option>
			</Listbox>
		</Box>
	);
}
