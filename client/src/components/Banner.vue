<template>
	<div class="banner d-flex flex-column justify-center align-center">
		<h3 class="text-center display-2 text-uppercase">
			Hoa fight
		</h3>

		<p> {{ $t("messages.homeCatchphrase") }} </p>

		<v-btn class="text-uppercase">
			{{ $t("messages.ctaPlay") }}
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
		background-color: #484747;
		color: #ffffff;
	}
</style>
