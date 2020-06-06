<template>
	<v-btn 
		@click="deleteAccount"
		min-width="100%" 
		small 
		tile 
		color="error"
	>
		<v-icon small>
			mdi-delete
		</v-icon>
		{{ $t('messages.ctaDeleteAccount') }}
	</v-btn>
</template>

<script>
	export default {
		name: "DeleteAccountBtn",

		methods: {
			deleteAccount: function() {
				console.log("Account delete - WIP");
			}
		}
	}
</script>