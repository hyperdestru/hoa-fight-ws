<template>
	<v-row justify="center">
		<v-col cols="10">
			<v-card 
				tile
				min-height="450px"
				min-width="290px"
				class="
					card
					pa-10
					d-flex 
					flex-row
					justify-space-between 
				"
			>
				<v-avatar 
					tile 
					min-width="132px" 
					min-height="132px"
					color="#3F5CD0"
					class="mb-6"
				>
					<v-icon x-large>mdi-account</v-icon>
					<v-btn absolute bottom x-small>
						{{ $t('messages.lModify') }}
					</v-btn>
				</v-avatar>

				<v-form 
					class="
						d-flex
						flex-column 
						justify-space-between 
						align-center
					"
				>
					<v-text-field
						clearable
						outlined
						:label="$t('messages.lChangeUsername')"
					>
					</v-text-field>

					<v-text-field
						clearable
						outlined
						:label="$t('messages.lChangeEmail')"
					>
					</v-text-field>

					<v-text-field
						clearable
						outlined
						:label="$t('messages.lCurrentPwd')"
					>
					</v-text-field>

					<v-text-field
						clearable
						outlined
						:label="$t('messages.lNewPwd')"
					>
					</v-text-field>

					<v-btn min-width="100%">
						{{ $t('messages.ctaUpdate') }}
					</v-btn>
				</v-form>

			</v-card>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		name: "AccountModif",
		
		data: () => ({

		}),

		methods: {
		}
	}
</script>