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
			<h2 class="display-4 text-uppercase">
				{{ $t('messages.tProjectName') }}
			</h2>
			<p class="title"> 
				{{ $t("messages.pCatchphrase") }} 
			</p>
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
