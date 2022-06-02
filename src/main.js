import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Blin',
		dimension: 22,
	}
});

export default app;