<template>
	<div class="dashboard">
		<h3 class="text-center pa-8 display-1">
			{{ $t('messages.tDashboard') }}
		</h3>
		<v-container 
			fluid 
			class="
				d-flex
				flex-column
				flex-sm-column
				flex-md-row
				flex-lg-row
				flex-xl-row
				align-start
				justify-space-around
			"
		>	
			<v-row justify="center">
				<v-col cols="10" sm="10" md="4" lg="4" xl="4">
					<profile-card>
					</profile-card>
				</v-col>

				<v-col cols="10" sm="10" md="4" lg="4" xl="4">
					<stats-card :userStats="userStats">
					</stats-card>
				</v-col>
				
				<v-col cols="10" sm="10" md="4" lg="4" xl="4">
					<game-launch-card>
					</game-launch-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import ProfileCard from '@/components/ProfileCard';
	import StatsCard from '@/components/StatsCard';
	import GameLaunchCard from '@/components/GameLaunchCard';

	export default {
		name: "Dashboard",

		components: {
			"profile-card": ProfileCard,
			"stats-card": StatsCard,
			"game-launch-card": GameLaunchCard,
		},

		data: () => ({
			userStats: {
				ratio: null,
				wonGames: null,
				lostGames: null,
				totalGames: null
			},
		})
	}
</script>