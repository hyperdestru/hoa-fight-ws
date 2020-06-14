<template>
	<div class="home">
		<signed-out-indication
			v-if="this.$route.params.isSignedOut === true"
		>
		</signed-out-indication>
		
		<home-banner></home-banner>
		<the-gameplay></the-gameplay>
	</div>
</template>

<script>
	import HomeBanner from '@/components/HomeBanner';
	import TheGameplay from '@/components/TheGameplay';
	import SignedOutIndication from '@/components/SignedOutIndication';

	export default {
		name: 'Home',

		components: {
			'home-banner': HomeBanner,
			'the-gameplay': TheGameplay,
			'signed-out-indication': SignedOutIndication
		}
	};
</script>
