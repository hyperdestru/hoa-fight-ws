<template>
	<div class="dashboard">
		<h3 class="text-center pa-8 display-1">
			{{ $t('messages.tDashboard') }}
		</h3>

		<temporary-message
			v-if="this.$route.params.welcome === true"
			:message="$t('messages.tWelcome')"
			:color="'primary'"
		>
		</temporary-message>

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
	import TemporaryMessage from '@/components/TemporaryMessage';
	import StatsService from '@/services/StatsService';
	import { formatDate } from '@/utils';

	export default {
		name: "Dashboard",

		components: {
			"profile-card": ProfileCard,
			"stats-card": StatsCard,
			"game-launch-card": GameLaunchCard,
			"temporary-message": TemporaryMessage,
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
			await this.setProfileData();
			await this.setStatsData();
			await this.setGameData();
		},

		methods: {
			setStatsData: async function() {
				const res = await StatsService.getStats(
					this.$store.getters.user.id
				);
				
				this.userStats.ratio = res.data.userStats.ratio;
				this.userStats.wonGames = res.data.userStats.wonGames;
				this.userStats.totalGames = res.data.userStats.totalGames;
				this.userStats.lostGames = res.data.userStats.lostGames;
			},

			setProfileData: async function() {
				const date = new Date(this.$store.getters.user.creationDate);

				this.userProfile.username = this.$store.getters.user.username;
				this.userProfile.email = this.$store.getters.user.email;
				this.userProfile.creationDate = formatDate(date);
			},

			setGameData: async function() {
				const hoafight = {
					mainUser: {
						id: this.$store.getters.user.id,
						username: this.userProfile.username,
						ratio: this.userStats.ratio,
						matchs: []
					},
					secondaryUser: {
						id: 0,
						username: "Guest01",
						ratio: 0,
						matchs: []
					}
				}

				if (!localStorage.getItem('hoafight')) {
					localStorage.setItem('hoafight', JSON.stringify(hoafight));
				}
			}

		}
	}
</script>