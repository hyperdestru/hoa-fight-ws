<template>
	<v-card tile class="card pa-10 d-flex flex-column align-center">
		<v-card-title class="text-uppercase">
			Stats
		</v-card-title>
		<v-progress-circular
			size="256"
			rotate="270"
			width="32"
			color="#3F5CD0"
			value="90"
		>
			<ul class="pl-0 d-flex flex-column justify-center align-center">
				<li class="display-1"> {{ getRatio() }}% </li>
				<li class="won"> {{ user.games.won }} gagnée(s)</li>
				<li> {{ user.games.total - user.games.won }} perdue(s)</li>
			</ul>
		</v-progress-circular>
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
				return (this.user.games.won*100)/this.user.games.total;
			}
		}
	}
</script>

<style scoped>
	ul {
		list-style-type: none;
		color: #000;
		font-weight: bold;
	}

	ul .won {
		color: "#3F5CD0";
	}
</style>