<template>
	<div class="main-wrapper">
		<v-container>
			<v-row>
				<v-col
					v-for="card in cards"
					v-bind:key="card.title"
					cols="6">

					<v-card tile
						min-height="300px" 
						class="d-flex flex-column justify-center align-center">

						<v-card-title 
							v-text="card.title" 
							class="text-uppercase">
						</v-card-title>

						<v-icon size="100"> {{ card.icon }} </v-icon>
					</v-card>

				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Gameplay",

		data: () => ({
			cards: [
				{ title:"elimine l'autre joueur !", src:"", icon:"mdi-boxing-glove" },
				{ title:"evite les bombes !", src:"", icon:"mdi-bomb" },
				{ title:"saute !", src:"", icon:"mdi-mushroom" },
				{ title:"ameliore ton score et ton rang !", src:"", icon:"mdi-medal" },
			]
		})
	}
</script>

<style scoped>
	.main-wrapper {
		background-color: #4C6BCE;
	}
</style>