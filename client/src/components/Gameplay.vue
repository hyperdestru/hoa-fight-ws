<template>
	<div class="gameplay-grid">
		<v-container>
			<v-row justify="center">
				<v-col 
					v-for="(card, index) in cards" :key="index"
					cols="5"
				>

					<v-card 
						tile
						class="
							card
							d-flex
							flex-column
							justify-center
							align-center
						"
					>
						<v-card-title 
							v-if="$vuetify.breakpoint.mdAndUp" 
							class="text-uppercase text-center"
						>
							{{ card.title }} !
						</v-card-title>

						<v-card-subtitle 
							v-if="$vuetify.breakpoint.smAndDown"
							class="text-uppercase text-center"
						>
							{{ card.title }} !
						</v-card-subtitle>

						<v-icon x-large> 
							{{ card.icon }}
						</v-icon>
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
				{
					title: "Un ennemi",
					src: "",
					icon: "mdi-boxing-glove"
				},
				{
					title: "Des bombes",
					src: "",
					icon: "mdi-bomb"
				},
				{ 
					title: "Des sauts",
					src: "",
					icon: "mdi-mushroom"
				},
				{ 
					title: "Un score à battre",
					src: "",
					icon: "mdi-medal"
				}
			]
		})
	}
</script>

<style scoped>
	.gameplay-grid {
		background-color: #4C6BCE;
	}
	.gameplay-grid .card {
		min-height: 300px;
		background-color: #eeeeee;
	}
</style>