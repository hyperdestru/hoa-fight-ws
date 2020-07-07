<template>
	<v-form class="pa-10">
		<div class="mb-10">
			<h4 class="display-1">
				{{ $t('messages.tDeleteAccount') }}
			</h4>
			<p class="subtitle-1">
				{{ $t('messages.stDeleteAccountWarning') }}
			</p>
		</div>

		<div class="pa-4">
			<p class="caption mb-0">
				{{ $t('messages.lEnterEmail') }}
			</p>
			<v-text-field 
				:label="$t('messages.lEmail')"
				v-model="email"
				:error-messages="error"
			>
			</v-text-field>
		</div>

		<v-btn 
			@click="deleteAccount"
			tile
			:disabled="this.email !== this.$store.getters.user.email"
			color="error" 
			min-width="100%"
		>
			{{ $t('messages.ctaDeleteAccountPlus') }}
		</v-btn>
	</v-form>
</template>

<script>
	import SettingsService from '../services/SettingsService';

	export default {
		name: 'DeleteAccountForm',

		data: () => ({
			email: null,
			error: null
		}),

		methods: {
			deleteAccount: async function() {
				try {
					await SettingsService.delete({
						id: this.$store.getters.user.id,
						email: this.email
					});

					this.$store.dispatch('flush');

					this.$router.replace({
						name: 'home',
						params: {
							accountDeleted: true
						}
					});

				} catch (err) {
					this.error = err.response.data.error;
				}
			}
		}
	}
</script>