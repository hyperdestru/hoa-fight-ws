<template>
	<div class="register-form">
		<v-container>
			<h3 class="text-center pa-8 display-1">
				{{ $t('messages.tRegister') }}
			</h3>
			
			<v-row justify="center">
				<v-col 
					cols="10" 
					sm="10"
					md="5" 
					lg="5" 
					xl="5"
				>
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
							@click="register"
							min-width="100%"
							tile
						>
							{{ $t('messages.ctaRegister') }}
						</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import AuthenticationService from '@/services/AuthenticationService';

	export default {
		name: "RegisterForm",
		
		data: () => ({
			username: '',
			email: '',
			password: '',
			passwordConfirm: '',
			error: null
		}),

		methods: {
			async register() {
				try {
					await AuthenticationService.register({
						username: this.username,
						email: this.email,
						password: this.password
					});

					this.$router.push({
						name: 'dashboard'
					});

				} catch(err) {
					console.log(err);
				}
			}
		}
	}
</script>
