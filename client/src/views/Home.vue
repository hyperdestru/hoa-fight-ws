<template>
	<div class="home">
		<main-banner></main-banner>
		<gameplay-grid></gameplay-grid>
	</div>
</template>

<script>
	import Banner from '@/components/Banner';
	import Gameplay from '@/components/Gameplay';

	export default {
		name: 'Home',

		components: {
			'main-banner': Banner,
			'gameplay-grid': Gameplay
		}
	};
</script>
