<template>
	<div class="home">
		<temporary-message
			v-if="this.$route.params.signOut === true"
			:message="$t('messages.tSignedOut')"
			:color="'primary'"
		>
		</temporary-message>
		<temporary-message
			v-if="this.$route.params.accountDeleted === true"
			:message="$t('messages.tFairwell')"
			:color="'primary'"
		>
		</temporary-message>
		
		<home-banner></home-banner>
		<the-gameplay></the-gameplay>
	</div>
</template>

<script>
	import HomeBanner from '@/components/HomeBanner';
	import TheGameplay from '@/components/TheGameplay';
	import TemporaryMessage from '@/components/TemporaryMessage';

	export default {
		name: 'Home',

		components: {
			'home-banner': HomeBanner,
			'the-gameplay': TheGameplay,
			'temporary-message': TemporaryMessage
		}
	};
</script>
