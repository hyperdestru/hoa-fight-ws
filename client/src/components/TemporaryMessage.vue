<template>
	<v-snackbar 
		v-model="snackbar"
		absolute
		top
		:color="color"
		class="title"
	>
		{{ message }}
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
		name: 'TemporaryMessage',

		props: {
			color: {
				type: String,
				required: true
			},
			
			message: {
				type: String,
				required: true
			}
		},

		data: () => ({
			snackbar: true
		})
	}
</script>