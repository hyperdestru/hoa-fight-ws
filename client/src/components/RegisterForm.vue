<template>
	<div class="register-form">
		<v-container>
			<v-row justify="center">
				<v-col cols="4" align="center">
					<h3 class="text-center pa-8 display-1">
						{{ $t('messages.tRegister') }}
					</h3>
					<v-form>
						<v-text-field
							clearable
							outlined
							:label="$t('messages.lUsername')"
							v-model="username"
							required>
						</v-text-field>

						<v-text-field
							clearable
							outlined
							:label="$t('messages.lEmail')"
							v-model="email"
							required>
						</v-text-field>

						<v-text-field
							clearable
							outlined
							:label="$t('messages.lPassword')"
							v-model="password"
							required>
						</v-text-field>

						<v-text-field
							clearable
							outlined
							:label="$t('messages.lConfirmPwd')"
							v-model="passwordConfirm"
							required>
						</v-text-field>

						<v-btn
							min-width="100%"
							class="submit-btn"
							tile
							v-on:click="register">
							{{ $t('messages.ctaRegister') }}
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
		name: "RegisterForm",
		
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
