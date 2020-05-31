<template>
	<div class="ranking-table">
		<v-container>
			<v-row justify="center">
				<v-col cols="8">
					<h3 class="text-center pa-8 display-1">
						{{ $t('messages.tRanking') }}
					</h3>

					<v-data-table 
						:headers="headers" 
						:items="users" 
						:items-per-page="12"
						fixed-header
						dense
					>
						<template v-slot:item.avatar="">
							<v-icon> mdi-alien </v-icon>
						</template>
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
			headers: [
				{ 
					text: 'Rang',
					value: "rank",
				},
				{ 
					text: "",
					sortable: false,
					value: "avatar",
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
			],
			users: []
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
