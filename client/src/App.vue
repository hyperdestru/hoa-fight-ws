<template>
	<v-app>
		<header-component></header-component>
		
		<v-content>
			<home-component></home-component>
		</v-content>

		<v-footer>
			<footer-component></footer-component>
		</v-footer>
	</v-app>
</template>

<script>
	import Header from './components/Header';
	import Home from './views/Home';
	import Footer from './components/Footer';

	export default {
		name: 'App',

		components: {
			'header-component': Header,
			'home-component': Home,
			'footer-component': Footer
		},

		data: () => ({
		
		})
	};
</script>
