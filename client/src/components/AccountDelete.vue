<template>
	<v-row justify="center">
		<v-col cols="10">
			<v-card 
				tile
				min-height="460px"
				min-width="290px"
				class="
					card
					d-flex
					flex-column
					align-center
				"
			>
				<v-card-title class="error--text">
					{{ $t('messages.tDeleteAccount') }}
				</v-card-title>

				<v-card-subtitle class="subtitle mt-2 error--text text-center">
					{{ $t('messages.stDeleteAccountWarning') }}.
				</v-card-subtitle>

				<div class="card-content mt-10">
					<v-form
						class="
							form
							d-flex
							flex-column 
							align-center
						"
					>	
						<div>
							<p class="error--text text-center"> 
								{{ $t('messages.lEnterEmail') }} 
							</p>
							<v-text-field
								clearable
								outlined
								dense
								persistent-hint
								:label="$t('messages.lEmail')"
								v-model="user.email"
								required>
							</v-text-field>
						</div>

						<v-btn tile min-width="100%" class="submit-btn">
							{{ $t('messages.ctaDeleteAccount') }}
						</v-btn>
					</v-form>
				</div>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		name: "AccountDelete",
		
		data: () => ({
			user: {
				email: ""
			}
		}),

		methods: {
		}
	}
</script>

<style scoped>
	.card .subtitle {
		max-width: 60%;
	}
</style>