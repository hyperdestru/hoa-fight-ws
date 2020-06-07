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
			<v-text-field :label="$t(label)">
			</v-text-field>
		</div>

		<v-btn @click="deleteAccount" color="error" min-width="100%">
			{{ $t('messages.ctaDeleteAccountPlus') }}
		</v-btn>
	</v-form>
</template>

<script>
	export default {
		name: 'DeleteAccountForm',

		data: () => ({
			label: 'messages.lEmail'
		}),

		methods: {
			deleteAccount: function() {
				console.log("Delete user account - WIP");
			}
		}
	}
</script>