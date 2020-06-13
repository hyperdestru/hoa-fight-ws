<template>
	<v-app>
		<the-header>
		</the-header>
		
		<v-content>
			<router-view>
			</router-view>
		</v-content>

		<the-footer>
		</the-footer>
	</v-app>
</template>

<script>
	import TheHeader from '@/components/TheHeader';
	import TheFooter from '@/components/TheFooter';

	export default {
		name: 'App',

		components: {
			'the-header': TheHeader,
			'the-footer': TheFooter
		}
	};
</script>
