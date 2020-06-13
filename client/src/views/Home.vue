<template>
	<div class="home">
		<home-banner></home-banner>
		<the-gameplay></the-gameplay>
	</div>
</template>

<script>
	import HomeBanner from '@/components/HomeBanner';
	import TheGameplay from '@/components/TheGameplay';

	export default {
		name: 'Home',

		components: {
			'home-banner': HomeBanner,
			'the-gameplay': TheGameplay
		}
	};
</script>
