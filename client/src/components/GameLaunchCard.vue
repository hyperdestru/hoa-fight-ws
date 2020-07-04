<template>
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
		<v-card-title class="title text-uppercase">
			{{ $t('messages.tGameLaunching') }}
		</v-card-title>

		<div class="card-content mt-10">
			<p class="subtitle-2 text-center">
				<v-icon>
					mdi-account-multiple
				</v-icon>
				{{ $t('messages.stSecondPlayer') }}
			</p>

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

				<v-btn
					:to="(guestMode === true) ? {name: 'game'} : ''"
					:disabled="guestMode === false"
					min-width="100%" 
					tile
				>
					{{ $t('messages.ctaLaunchGame') }}
				</v-btn>
			</v-form>
		</div>
	</v-card>
</template>

<script>
	export default {
		name: 'GameLaunchCard',
		
		data: () => ({
			secondPlayer: {
				username: '',
				password: ''
			},
			guestMode: false
		}),
	}
</script>