<template>
	<v-container>
		<h1 class="text-center">Inscription</h1>

		<v-form>
			<v-text-field
				clearable
				outlined
				label="Pseudo"
				v-model="username"
				required>
			</v-text-field>

			<v-text-field
				clearable
				outlined
				label="Email"
				v-model="email"
				required>
			</v-text-field>

			<v-text-field
				clearable
				outlined
				label="Mot de passe"
				v-model="password"
				required>
			</v-text-field>

			<v-btn 
				tile
				v-on:click="register">
				S'inscrire
			</v-btn>
		</v-form>

	</v-container>
</template>

<script>
	import AuthenticationService from '@/services/AuthenticationService'

	export default {
		data: () => ({
			username: '',
			email: '',
			password: ''
		}),

		methods: {
			async register() {
				const res = await AuthenticationService.register({
					username: this.username,
					email: this.email,
					password: this.password
				})
				console.log(res.data)
			}
		}
	}
</script>
