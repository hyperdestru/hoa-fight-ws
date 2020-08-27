<template>
	<v-form>
		<v-text-field
			outlined
			v-model="email"
			:label="$t('messages.lEmail')"
			:error-messages="(errorType === 'email') ? error : ''"
		>
		</v-text-field>

		<v-text-field
			outlined
			v-model="password"
			:label="$t('messages.lPassword')"
			:error-messages="(errorType === 'password') ? error : ''"

			:type="showPassword ? 'text' : 'password'"
			:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
			@click:append="showPassword = !showPassword"
		>
		</v-text-field>

		<v-btn
			@click="login"
			min-width="100%"
			tile
		>
			{{ $t('messages.ctaConnect') }}
		</v-btn>
	</v-form>
</template>

<script>
	import AuthService from '@/services/AuthService';

	export default {
		name: "LoginForm",
		
		data: () => ({
			email: '',
			password: '',

			error: null,
			errorType: null,
			showPassword: false
		}),

		methods: {
			async login() {
				try {
					const res = await AuthService.login({
						email: this.email,
						password: this.password
					});

					this.$store.commit('auth', res.data.auth);
					this.$store.commit('user', res.data.user);
					this.$router.push({ 
						name: 'dashboard',
						params: {
							userId: this.$store.getters.user.id,
						}
					});

				} catch(err) {
					this.error = err.response.data.error;
					this.errorType = err.response.data.errorType;
				}
			}
		}
	}
</script>
