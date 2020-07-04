<template>
	<v-snackbar 
		v-model="snackbar"
		absolute
		top
		color="primary"
		class="title"
	>
		{{ $t('messages.tWelcome') }}
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
		name: 'WelcomeIndication',

		data: () => ({
			snackbar: true
		})
	}
</script>