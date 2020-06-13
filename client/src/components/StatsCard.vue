<template>
	<v-card 
		tile
		min-height="450px"
		min-width="290px"
		class="
			card 
			d-flex 
			flex-column 
			align-center
		"
	>
		<v-card-title class="title text-uppercase">
			{{ $t('messages.tStats') }}
		</v-card-title>

		<div class="card-content mt-10">
			
			<v-progress-circular
				size="256"
				rotate="270"
				width="32"
				color="#3F5CD0"
				:value="getRatio()"
			>
				<ul
					style="list-style-type: none"
					class="
						pl-0 
						d-flex 
						flex-column 
						justify-center 
						align-center
						font-weight-bold
						black--text
					"
				>
					<li class="display-1"> 
						{{ getRatio() }}%
					</li>

					<li class="won primary--text"> 
						{{ getGamesWon() }}
						{{ $t("messages.pWon") }}
					</li>
					
					<li> 
						{{ getGamesLost() }}
						{{ $t("messages.pLost") }}
					</li>
				</ul>
			</v-progress-circular>
		</div>
		
	</v-card>
</template>

<script>
	export default {
		name: "StatsCard",
		
		data: () => ({
			user: {
				ratio: null,
				games: {
					total: 10,
					won: 9,
				}
			}
		}),

		methods: {
			getRatio: function() {
				if (this.user.games.won <= this.user.games.total) {
					return (this.user.games.won * 100) / this.user.games.total;
				} else {
					return "--";
				}
			},

			getGamesWon: function() {
				if (this.user.games.won <= this.user.games.total) {
					return this.user.games.won;
				} else {
					return "--";
				}
			},

			getGamesLost: function() {
				if (this.user.games.won <= this.user.games.total) {
					return  this.user.games.total - this.user.games.won;
				} else {
					return "--";
				}
			}
		}
	}
</script>