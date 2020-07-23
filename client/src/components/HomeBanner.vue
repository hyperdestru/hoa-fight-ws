<template>
	<div 
		style="height: 600px"
		class="
			home-banner 
			d-flex 
			flex-column 
			justify-space-around 
			align-center
			black
			white--text
		"
	>
		<img 
			:src="gifPath"
			width="100%"
			height="600px"
			style="position: absolute; z-index:0; opacity:0.5"
		>

		<div class="text-center" style="z-index: 1">
			<img 
				:src="logoPath"
				alt="Hoa Fight"
				style="width: 100%; height: auto"
			>
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
			btnRedirect: '',
			gifPath: "http://localhost:3000/images/hoafight-gameplay.gif",
			logoPath: "http://localhost:3000/images/logo/logo-white-@2-5x.png"
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
