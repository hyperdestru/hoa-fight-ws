<template>
	<div class="ranking-table">
		<v-container>
			<h3 class="text-center pa-8 display-1">
				{{ $t('messages.tRanking') }}
			</h3>
			<v-row justify="center">
				<v-col 
					cols="10" 
					sm="10" 
					md="8" 
					lg="8" 
					xl="8"
				>
					<v-data-table 
						:headers="headers" 
						:items="users" 
						:items-per-page="15"
						fixed-header
						class="title primary--text"
					>
					</v-data-table>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import RankingService from '../services/RankingService';

	export default {
		name: "RankingTable",
		
		data: () => ({
			users: [],

			headers: [
				{ 
					text: 'Rang',
					value: "rank",
				},
				{ 
					text: 'Pseudo',
					value: "username",
				},
				{ 
					text: 'Ratio',
					value: "ratio",
					align: "middle",
				}
			]
		}),

		async mounted() {
			const res = await RankingService.getRanking();
			this.users = res.data;
		}
	}
</script>
