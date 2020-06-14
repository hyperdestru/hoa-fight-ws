<template>
	<v-snackbar 
		v-model="snackbar"
		absolute
		top
		color="primary"
		class="title"
	>
		{{ $t('messages.tSignedOut') }}
		<v-btn 
			@click="snackbar = false"
			icon
		>
			<v-icon color="white">
				mdi-close
			</v-icon>
		</v-btn>
	</v-snackbar>
</template>

<script>
	export default {
		name: 'SignedOutIndication',

		data: () => ({
			snackbar: true
		})
	}
</script>