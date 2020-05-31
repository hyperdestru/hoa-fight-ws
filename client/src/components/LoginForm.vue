<template>
	<div class="login-form">
		<v-container>
			<v-row justify="center">
				<v-col cols="4" align="center">
					<h3 class="text-center pa-8 display-1">
						{{ $t('messages.tLogin') }}
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
							:label="$t('messages.lPassword')"
							v-model="password"
							required>
						</v-text-field>

						<v-btn tile min-width="100%">
							{{ $t('messages.ctaConnect') }}
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
