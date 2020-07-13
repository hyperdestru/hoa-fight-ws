<template>
	<div>
		<v-btn 
			@click="overlay = !overlay"
			min-width="100%" 
			small 
			tile 
			color="error"
			class="mt-2"
		>
			<v-icon small>
				mdi-delete
			</v-icon>
			{{ $t('messages.ctaDeleteAccount') }}
		</v-btn>

		<v-overlay 
			:value="overlay" 
			opacity="0.95"
			color="primary"
			class="text-center"
		>
			<delete-account-form>
			</delete-account-form>

			<v-btn 
				@click="overlay = false" 
				icon 
				x-large 
				class="mt-10"
			>
				<v-icon>
					mdi-close
				</v-icon>
			</v-btn>
		</v-overlay>
	</div>
</template>

<script>
	import DeleteAccountForm from '@/components/DeleteAccountForm';

	export default {
		name: "DeleteAccountBtn",

		components: {
			'delete-account-form': DeleteAccountForm
		},

		data: () => ({
			overlay: false
		}),
	}
</script>