<template>
	<div class="register">
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
					<register-form>
					</register-form>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import RegisterForm from '@/components/RegisterForm';

	export default {
		name: "Register",

		components: {
			"register-form": RegisterForm
		}
	}
</script>
