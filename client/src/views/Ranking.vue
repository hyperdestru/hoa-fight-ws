<template>
	<div class="ranking">
		<ranking-table></ranking-table>
	</div>
</template>

<script>
	import RankingTable from '@/components/RankingTable'

	export default {
		name: "Ranking",

		components: {
			"ranking-table": RankingTable
		}
	}
</script>
