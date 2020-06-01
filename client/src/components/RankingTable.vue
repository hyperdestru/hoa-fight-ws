<template>
	<div class="ranking-table">
		<v-container>
			<h3 class="text-center pa-8 display-1">
				{{ $t('messages.tRanking') }}
			</h3>
			<v-row justify="center">
				<v-col xs="10" sm="10" md="8" lg="8" xl="8">
					<v-data-table 
						:headers="headers" 
						:items="users" 
						:items-per-page="5"
						fixed-header
					>
					</v-data-table>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>

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

		created: function() {
			for (let i = 1; i <= 100; i++) {
				this.users.push(
					{ 
						rank: i,
						avatar: "", 
						username: "SomePseudo", 
						ratio: 101 - i
					}
				)
			}
		}
	}
</script>
