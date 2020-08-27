<template>
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

		<v-btn min-width="100%" tile>
			{{ $t('messages.ctaUpdate') }}
		</v-btn>
	</v-form>
</template>

<script>
	export default {
		name: 'AccountModifForm',

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