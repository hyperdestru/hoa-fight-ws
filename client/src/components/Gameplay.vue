<template>
	<div class="gameplay-grid primary">
		<v-container fluid>
			<v-row 
				class="
					d-flex 
					flex-column
					justify-space-between
					align-center

					flex-sm-column
					justify-sm-space-between
					align-sm-center

					flex-md-row
					justify-md-center
					align-md-center

					flex-lg-row
					justify-lg-center
					align-lg-center

					flex-xl-row
					justify-xl-center
					align-xl-center
				"
			>
				<v-col 
					v-for="(card, index) in cards" :key="index"
					cols="12" sm="10" md="5" lg="5" xl="5"
				>

					<v-card 
						tile
						dark
						class="
							card
							d-flex
							flex-column
							justify-center
							align-center
							accent
						"
					>
						<v-card-subtitle 
							class="title text-uppercase text-center"
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
	.gameplay-grid .card {
		min-height: 300px;
	}
</style>