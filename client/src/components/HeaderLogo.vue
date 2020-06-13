<template>
	<router-link :to="{name: 'home'}">
		<v-btn icon>
			<v-icon :x-large="$vuetify.breakpoint.smAndUp">
				mdi-boxing-glove
			</v-icon>
		</v-btn>
	</router-link>
</template>

<script>
	export default {
		name: 'HeaderLogo'
	}
</script>