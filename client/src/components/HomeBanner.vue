<template>
	<div 
		style="height: 600px"
		class="
			home-banner 
			d-flex 
			flex-column 
			justify-space-around 
			align-center
			accent
			white--text
		"
	>
		<img 
			src="https://media.giphy.com/media/l4FGxqS178R544oEM/giphy.gif" 
			width="100%"
			height="600px"
			style="position: absolute; z-index:0; opacity:0.2"
		>

		<div class="text-center" style="z-index: 1">
			<h1 class="display-4 text-uppercase">
				{{ $t('messages.tProjectName') }}
			</h1>
			<h2 class="headline"> 
				{{ $t("messages.pCatchphrase") }} 
			</h2>
		</div>

		<v-btn 
			:to="{name: btnRedirect}" 
			tile 
			class="title"
		>
			{{ $t(btnText) }}
		</v-btn>
	</div>
</template>

<script>
	export default {
		name: 'HomeBanner',

		data: () => ({
			btnText: '',
			btnRedirect: ''
		}),

		mounted() {
			if (this.$store.getters.auth === true) {
				this.btnText = 'messages.ctaLaunchGame2';
				this.btnRedirect = 'dashboard'
			} else {
				this.btnText = 'messages.ctaPlayForFree',
				this.btnRedirect = 'register';
			}
		}
	}
</script>
