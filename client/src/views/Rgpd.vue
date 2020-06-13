<template>
	<v-container>
		<mandatory-info-card
			:title="$t('messages.tRgpd')"
			:text="$t('rgpd')"
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