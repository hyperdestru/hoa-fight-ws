<template>
	<div class="settings">
		<h3 class="text-center pa-8 display-1">
			{{ $t('messages.tModifProfile') }}
		</h3>
		<v-container fluid>	
			<v-row justify="center">
				<v-col 
					cols="11" 
					sm="10" 
					md="6" 
					lg="6" 
					xl="6"
				>
					<account-modif></account-modif>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import AccountModif from '@/components/AccountModif';

	export default {
		name: 'Settings',

		components: {
			'account-modif': AccountModif,
		}
	};
</script>
