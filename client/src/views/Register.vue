<template>
	<div class="register">
		<register-form></register-form>
	</div>
</template>

<script>
	import RegisterForm from '@/components/RegisterForm'

	export default {
		name: "Register",

		components: {
			"register-form": RegisterForm
		}
	}
</script>
