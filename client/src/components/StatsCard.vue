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
				:value="userStats.ratio"
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
						{{ userStats.ratio }}%
					</li>

					<li class="won primary--text"> 
						{{userStats.wonGames }}
						{{ $t("messages.pWon") }}
					</li>
					
					<li> 
						{{ userStats.lostGames }}
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
		
		props: {
			userStats: {
				type: Object,
				required: true
			}
		}
	}
</script>