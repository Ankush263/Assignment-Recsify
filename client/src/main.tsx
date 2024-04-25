import { createRoot } from 'react-dom/client';
import App from './App';
import { AppProvider } from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';

const container: HTMLElement | null = document.getElementById('root');

if (container) {
	const root = createRoot(container);
	root.render(
		<AppProvider i18n={en} theme="light-mobile">
			<App />
		</AppProvider>
	);
} else {
	console.error('Container element not found!');
}
