<template>
	<div 
		class="
			banner 
			d-flex 
			flex-column 
			justify-space-around 
			align-center
			accent
			white--text
		"
	>
		<div class="text-center">
			<h1 class="display-4 text-uppercase">
				{{ $t('messages.tProjectName') }}
			</h1>
			<h2 class="title"> 
				{{ $t("messages.pCatchphrase") }} 
			</h2>
		</div>

		<v-btn class="text-uppercase">
			{{ $t("messages.ctaPlayForFree") }}
		</v-btn>
	</div>
</template>

<script>
	export default {
		name: 'Banner'
	}
</script>

<style scoped>
	.banner {
		height: 600px;
	}
</style>
