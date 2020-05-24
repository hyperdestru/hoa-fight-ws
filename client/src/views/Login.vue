<template>
	<div class="login">
		<login-form></login-form>
	</div>
</template>

<script>
	import LoginForm from '@/components/LoginForm'

	export default {
		name: "Login",

		components: {
			"login-form": LoginForm
		}
	}
</script>
