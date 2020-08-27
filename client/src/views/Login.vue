<template>
	<div class="login">
		<v-container>
			<h3 class="text-center pa-8 display-1">
				{{ $t('messages.tLogin') }}
			</h3>

			<v-row justify="center">
				<v-col 
					cols="10" 
					sm="10" 
					md="5" 
					lg="5" 
					xl="5"
				>
					<login-form>
					</login-form>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import LoginForm from '@/components/LoginForm';

	export default {
		name: "Login",

		components: {
			"login-form": LoginForm
		}
	}
</script>
