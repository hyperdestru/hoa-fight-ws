<template>
	<div class="register">
		<v-container>
			<v-row justify="center">
				<v-col cols="4" align="center">
					<h1 class="text-center pb-8">S'inscrire</h1>
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

						<v-text-field
							clearable
							outlined
							label="Confirmation du mot de passe"
							v-model="passwordConfirm"
							required>
						</v-text-field>

						<v-btn 
							tile
							v-on:click="register">
							Créer mon compte
						</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import AuthenticationService from '@/services/AuthenticationService'

	export default {
		data: () => ({
			username: '',
			email: '',
			password: '',
			passwordConfirm: ''
		}),

		methods: {
			async register() {
				await AuthenticationService.register({
					username: this.username,
					email: this.email,
					password: this.password
				})
			}
		}
	}
</script>
