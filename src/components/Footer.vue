<template>
	<div class="d-flex flex-column justify-center align-center mx-auto">
		<p> Gaël Dumon &copy; {{ new Date().getFullYear() }} </p>
		<ul class="d-flex flex-row justify-space-between align-center">
			<li class="pl-3 pr-3" v-for="page in pages" v-bind:key="page.name">
				<a v-on:click.prevent v-bind:href="page.link"> {{ page.name }} </a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Footer",

		data: () => ({
			pages: [
				{ name: "Politique de confidentialité", link: "" },
				{ name: "Conditions d'utilisation", link: "" },
				{ name: "Politique sur les cookies", link: "" }
			]
		})
	}
</script>

<style scoped>
	ul {
		list-style-type: none;
	}
	a {
		text-decoration: none;
	}
</style>