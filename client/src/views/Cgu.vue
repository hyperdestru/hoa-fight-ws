<template>
	<v-container>
		<mandatory-info-card
			:title="$t('messages.tCgu')"
			:text="$t('cgu')"
		>
		</mandatory-info-card>
	</v-container>
</template>

<script>
	import MandatoryInfoCard from '../components/MandatoryInfoCard';

	export default {
		name: 'Rgpd',
		
		components: {
			'mandatory-info-card': MandatoryInfoCard
		}
	}
</script>