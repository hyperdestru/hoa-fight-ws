<template>
	<div class="login-form">
		<v-container>
			<v-row justify="center">
				<v-col cols="4" align="center">
					<h3 class="text-center pa-8 display-1">Se connecter</h3>
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
							label="Mot de passe"
							v-model="password"
							required>
						</v-text-field>

						<v-btn tile min-width="100%">
							Connexion
						</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>

	export default {
		name: "LoginForm",
		
		data: () => ({
			username: '',
			password: '',
		}),

		methods: {
		}
	}
</script>
