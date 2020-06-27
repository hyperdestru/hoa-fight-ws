<template>
	<v-form>
		<v-text-field
			clearable
			outlined
			:label="$t('messages.lUsername')"
			v-model="username"
			:hint="$t('messages.lMinCharRule', {n: 5})"
			:error-messages="errorType === 'username' ? error : ''"
			required
		>
		</v-text-field>

		<v-text-field
			clearable
			outlined
			:label="$t('messages.lEmail')"
			v-model="email"
			:error-messages="errorType === 'email' ? error : ''"
			required
		>
		</v-text-field>

		<v-text-field
			clearable
			outlined
			:label="$t('messages.lPassword')"
			v-model="password"
			:hint="$t('messages.lMinCharRule', {n: 8})"
			:error-messages="errorType === 'password' ? error : ''"
			required
		>
		</v-text-field>

		<v-text-field
			clearable
			outlined
			:label="$t('messages.lConfirmPwd')"
			v-model="repeatPassword"
			:error-messages="errorType === 'repeatPassword' ? error : ''"
			required
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
			errorType: null
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
