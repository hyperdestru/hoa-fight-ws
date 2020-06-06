<template>
	<v-card 
		tile
		class="
			card
			pa-4
			d-flex

			flex-column
			justify-space-between
			align-center

			flex-sm-column
			justify-sm-space-between
			align-sm-center

			flex-md-row
			justify-md-space-between
			align-md-start

			flex-lg-row
			justify-lg-space-between
			align-lg-start

			flex-xl-row
			justify-xl-space-between
			align-xl-start
		"
	>	
		<div class="pa-4 d-flex flex-column">
			<v-avatar
				tile
				class="mb-4"
				min-width="128px"
				min-height="128px"
				color="primary"
			>
				<v-icon x-large>mdi-account</v-icon>
				<v-btn tile absolute bottom x-small>
					{{ $t('messages.lModify') }}
				</v-btn>
			</v-avatar>

			<delete-account-btn>
			</delete-account-btn>
		</div>

		<v-form
			class="
				form
				pa-4
				d-flex

				flex-column
				justify-space-between
				align-center
				
				flex-sm-column
				justify-sm-space-between
				align-sm-center

				flex-md-column
				justify-md-space-between
				align-md-center

				flex-lg-row
				flex-lg-wrap
				justify-lg-space-between
				align-lg-center

				flex-xl-row
				flex-xl-wrap
				justify-xl-space-between
				align-xl-center
			"
		>
			<div v-for="(field, index) in form.fields" :key="index">
				<v-text-field
					clearable
					outlined
					:label="$t(field.label)"
				>
				</v-text-field>
			</div>

			<v-btn min-width="100%">
				{{ $t('messages.ctaUpdate') }}
			</v-btn>
		</v-form>
	</v-card>
</template>

<script>
	import DeleteAccountBtn from '@/components/DeleteAccountBtn'

	export default {
		name: "AccountModif",

		components: {
			'delete-account-btn': DeleteAccountBtn
		},

		data: () => ({
			form: {
				fields: [
					{ label: 'messages.lChangeUsername' },
					{ label: 'messages.lChangeEmail' },
					{ label: 'messages.lCurrentPwd' },
					{ label: 'messages.lNewPwd' }
				]
			}
		})
	}
</script>