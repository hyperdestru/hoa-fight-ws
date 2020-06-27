<template>
	<v-form>
		<v-text-field
			outlined
			v-model="username"
			:label="$t('messages.lUsername')"
			:hint="$t('messages.lMinCharRule', {n: 5})"
			:error-messages="errorType === 'username' ? error : ''"
		>
		</v-text-field>

		<v-text-field
			outlined
			v-model="email"
			:label="$t('messages.lEmail')"
			:error-messages="errorType === 'email' ? error : ''"
		>
		</v-text-field>

		<v-text-field
			outlined
			v-model="password"
			:type="showPassword ? 'text' : 'password'"
			:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
			@click:append="showPassword = !showPassword"
			:label="$t('messages.lPassword')"
			:hint="$t('messages.lMinCharRule', {n: 8})"
			:error-messages="errorType === 'password' ? error : ''"
		>
		</v-text-field>

		<v-text-field
			outlined
			v-model="repeatPassword"
			:type="showPassword ? 'text' : 'password'"
			:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
			@click:append="showPassword = !showPassword"
			:label="$t('messages.lConfirmPwd')"
			:error-messages="errorType === 'repeatPassword' ? error : ''"
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
