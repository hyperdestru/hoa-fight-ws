<template>
	<v-app>
		<v-content app>
			<header-component></header-component>
			<main-banner></main-banner>
		</v-content>

		<v-footer app>
			&copy; {{ new Date().getFullYear() }}
		</v-footer>
	</v-app>
</template>

<script>
	import Header from './components/Header';
	import Banner from './components/Banner';

	export default {
		name: 'App',

		components: {
			'header-component': Header,
			'main-banner': Banner
		},

		data: () => ({
		
		})
	};
</script>
