<template>
	<router-link :to="{name: 'home'}">
		<v-icon :x-large="$vuetify.breakpoint.smAndUp">
			mdi-boxing-glove
		</v-icon>
	</router-link>
</template>

<script>
	export default {
		name: 'HeaderLogo'
	}
</script>