<template>
	<v-form>
		<v-text-field
			outlined
			v-model="username"
			:error-messages="errorMessageHandler('username')"
			:label="$t('messages.lUsername')"
			:hint="$t('messages.lMinCharRule', {n: 5})"
		>
		</v-text-field>

		<v-text-field
			outlined
			v-model="email"
			:error-messages="errorMessageHandler('email')"
			:label="$t('messages.lEmail')"
		>
		</v-text-field>

		<v-text-field
			outlined
			v-model="password"
			:error-messages="errorMessageHandler('password')"
			:label="$t('messages.lPassword')"
			:hint="$t('messages.lMinCharRule', {n: 8})"

			:type="showPassword ? 'text' : 'password'"
			:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
			@click:append="showPassword = !showPassword"
		>
		</v-text-field>

		<v-text-field
			outlined
			v-model="repeatPassword"
			:error-messages="errorMessageHandler('repeatPassword')"
			:label="$t('messages.lConfirmPwd')"
			
			:type="showPassword ? 'text' : 'password'"
			:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
			@click:append="showPassword = !showPassword"
		>
		</v-text-field>

		<v-btn
			@click="register"
			min-width="100%"
			tile
		>
			{{ $t('messages.ctaRegister') }}
		</v-btn>
	</v-form>
</template>

<script>
	import AuthService from '@/services/AuthService';

	export default {
		name: "RegisterForm",
		
		data: () => ({
			username: '',
			email: '',
			password: '',
			repeatPassword: '',
			error: null,
			errorType: null,
			showPassword: false
		}),

		methods: {
			errorMessageHandler: function(v) {
				if (this.errorType === v) {
					return this.error;
				}
			},

			async register() {
				try {
					await AuthService.register({
						username: this.username,
						email: this.email,
						password: this.password,
						repeatPassword: this.repeatPassword,
					});

					this.$router.push({
						name: 'dashboard'
					});

				} catch(err) {
					// Error from Axios
					this.error = err.response.data.error;
					this.errorType = err.response.data.errorType;
				}
			}
		}
	}
</script>
