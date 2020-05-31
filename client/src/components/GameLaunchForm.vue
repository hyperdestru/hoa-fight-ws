<template>
	<v-row justify="center">
		<v-col cols="10">
			<v-card 
				tile
				min-height="450px"
				min-width="290px"
				class='card d-flex flex-column align-center'
			>
				<v-card-title class='text-uppercase'>
					{{ $t('messages.tGameLaunching') }}
				</v-card-title>

				<v-card-subtitle>
					{{ $t('messages.stSecondPlayer') }}
				</v-card-subtitle>

				<div class="card-content mt-10">
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
							:label="$t('messages.lUsername')"
							v-model="secondPlayer.username"
						>
						</v-text-field>

						<v-text-field
							clearable
							outlined
							:label="$t('messages.lPassword')"
							v-model="secondPlayer.password"
						>
						</v-text-field>

						<v-switch
							:label="$t('messages.lGuestMode')"
							v-model="guestMode"
						></v-switch>

						<v-btn min-width="100%">
							{{ $t('messages.ctaLaunchGame') }}
						</v-btn>
					</v-form>
				</div>

			</v-card>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		name: 'GameLaunchForm',
		
		data: () => ({
			secondPlayer: {
				username: '',
				password: ''
			},
			guestMode: false
		}),
	}
</script>

<style scoped>
</style>