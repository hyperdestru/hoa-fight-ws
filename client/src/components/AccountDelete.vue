<template>
	<v-row justify="center">
		<v-col cols="10">
			<v-card 
				tile
				min-height="450px"
				min-width="290px"
				class="
					card
					d-flex 
					flex-column 
					align-center
				"
			>
				<v-card-title class="error--text">
					{{ $t('messages.deleteAccount') }}
				</v-card-title>

				<v-card-subtitle class="error--text text-center">
					{{ $t('messages.deleteAccountWarning') }}.
				</v-card-subtitle>

				<div class="card-content mt-10">
					<v-form
						class="
							form
							d-flex
							flex-column 
							justify-space-around
							align-center
						"
					>	
						<div>
							<p class="error--text ma-0 text-center"> 
								{{ $t('messages.enterEmail') }} 
							</p>
							<v-text-field
								clearable
								outlined
								dense
								persistent-hint
								:label="$t('messages.email')"
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
	.card .card-content {
		height: 300px;
	}
	.card .card-content .form {
		height: 100%;
	}
</style>