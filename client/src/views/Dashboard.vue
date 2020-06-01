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
				flex-xl-row
				flex-lg-row
				flex-md-row
				flex-sm-column
				justify-space-around
			"
		>
			<profile-card></profile-card>
			<stats-card></stats-card>
			<game-launch-form></game-launch-form>
		</v-container>
	</div>
</template>

<script>
	import ProfileCard from '@/components/ProfileCard'
	import StatsCard from '@/components/StatsCard'
	import GameLaunchForm from '../components/GameLaunchForm'

	export default {
		name: "Dashboard",

		components: {
			"profile-card": ProfileCard,
			"stats-card": StatsCard,
			"game-launch-form": GameLaunchForm,
		},

		data: () => ({

		}),
	}
</script>