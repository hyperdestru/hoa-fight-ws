<template>
	<v-app>
		<header-component>
		</header-component>
		
		<v-content>
			<router-view>
			</router-view>
		</v-content>

		<footer-component>
		</footer-component>
	</v-app>
</template>

<script>
	import Header from '@/components/Header';
	import Footer from '@/components/Footer';

	export default {
		name: 'App',

		components: {
			'header-component': Header,
			'footer-component': Footer
		}
	};
</script>
