<template>
	<div class="gameplay primary">
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
					cols="12" 
					sm="10" 
					md="5" 
					lg="5" 
					xl="5"
				>

					<v-card 
						tile
						dark
						min-height="300px"
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
							class="title text-uppercase text-center white--text"
						>
							{{ $t(card.title) }} !
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
		name: "TheGameplay",

		data: () => ({
			cards: [
				{
					title: "messages.pGp1",
					icon: "mdi-boxing-glove"
				},
				{
					title: "messages.pGp2",
					icon: "mdi-bomb"
				},
				{ 
					title: "messages.pGp3",
					icon: "mdi-mushroom"
				},
				{ 
					title: "messages.pGp4",
					icon: "mdi-medal"
				}
			]
		})
	}
</script>