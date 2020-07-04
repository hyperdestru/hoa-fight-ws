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
					<profile-card :userProfile="userProfile">
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
	import DashboardService from '@/services/DashboardService';
	import { formatDate } from '@/utils';

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
			userProfile: {
				username: null,
				email: null,
				creationDate: null
			}
		}),

		async mounted() {
			await this.setStatsData();
			//await this.setProfileData();
		},

		methods: {
			setStatsData: async function() {
				const res = await DashboardService.getStats({ 
					userId: this.$store.getters.userId 
				});

				this.userStats.ratio = res.data.userStats.ratio;
				this.userStats.wonGames = res.data.userStats.wonGames;
				this.userStats.totalGames = res.data.userStats.totalGames;
				this.userStats.lostGames = res.data.userStats.lostGames;
			},

			setProfileData: async function() {
				const res = await DashboardService.getProfile({
					userId: this.$store.getters.userId
				});

				const date = new Date(res.data.userProfile.creationDate);

				this.userProfile.username = res.data.userProfile.username;
				this.userProfile.email = res.data.userProfile.email;
				this.userProfile.creationDate = formatDate(date);
			}
		}
	}
</script>