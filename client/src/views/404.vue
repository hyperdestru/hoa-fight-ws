<template>
	<v-container
		class="
			d-flex 
			flex-column 
			justify-center 
			align-center 
		"
	>
		<p class="display-1 primary--text text-center">
			{{ $t('messages.p404Error') }}
		</p>

		<v-btn :to="{name: 'home'}" tile>
			{{ $t('messages.ctaBackToHome') }}
		</v-btn>
	</v-container>
</template>

<script>
	export default {
		name: 'The404',
	}
</script>