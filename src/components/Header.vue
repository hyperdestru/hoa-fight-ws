<template>
	<v-container fluid>
		<div class="main-wrapper d-flex flex-row">
			<img alt="LOGO" src=""/>
			<nav>
				<ul class="d-flex flex-row justify-space-around">
					<li v-on:click.prevent v-for="(value, index) in pages" 
					v-bind:key="index">
						<a class="text-uppercase black--text" v-bind:href="value.link"> 
							{{ value.name }}
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</v-container>
</template>

<script>
	export default {
		name: 'Header',

		data: () => ({
			pages: [
				{name: "acceuil", link: ""},
				{name: "inscription", link: ""},
				{name: "connexion", link: ""}
			]
		})
	}
</script>

<style scoped>

	nav ul {
		list-style-type: none;
	}

	a {
		text-decoration: none;
	}

</style>


