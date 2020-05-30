<template>
	<v-card tile class='card pa-10 d-flex flex-column justify-center align-center'>
		<v-card-title class='text-uppercase'>
			{{ $t('messages.gameLaunching') }}
		</v-card-title>
		<v-card-subtitle>
			{{ $t('messages.secondPlayer') }}
		</v-card-subtitle>
		<v-form class="d-flex flex-column justify-center align-center">
			<v-text-field
				clearable
				outlined
				:label="$t('messages.username')"
				v-model="secondPlayer.username"
			>
			</v-text-field>
			<v-text-field
				clearable
				outlined
				:label="$t('messages.password')"
				v-model="secondPlayer.password"
			>
			</v-text-field>
			<v-switch
				:label="$t('messages.guestMode')"
				v-model="guestMode"
			></v-switch>
			<v-btn>
				{{ $t('messages.gameLaunch') }}
			</v-btn>
		</v-form>
	</v-card>
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