<template>
	<div class="header">
		<v-container 
			fluid 
			class="d-flex flex-row justify-space-between align-center">
			
			<v-icon x-large>
				mdi-alien
			</v-icon>

			<v-list>
				<v-list-item-group class="d-flex flex-row text-uppercase">

					<v-list-item 
						v-for="(page, index) in pages" 
						v-bind:key="index">

						<v-list-item-content>
							<v-list-item-title v-text="page.name">
							</v-list-item-title>
						</v-list-item-content>

					</v-list-item>

				</v-list-item-group>
			</v-list>

		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'Header',

		data: () => ({			
			pages: [
				{ name: "acceuil", link: "" },
				{ name: "inscription", link: "" },
				{ name: "connexion", link: "" }
			]
		})
	}
</script>

