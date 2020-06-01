<template>
	<div class="settings">
		<h3 class="text-center pa-8 display-1">
			{{ $t('messages.tModifProfile') }}
		</h3>
		<v-container 
			class="
				d-flex
				flex-column
				flex-sm-row
				flex-md-row
				flex-lg-row
				flex-xl-row
				align-start
				justify-space-around
			"
		>
			<account-modif></account-modif>
			<account-delete></account-delete>
		</v-container>
	</div>
</template>

<script>
	import AccountModif from '@/components/AccountModif';
	import AccountDelete from '@/components/AccountDelete';

	export default {
		name: 'Settings',

		components: {
			'account-modif': AccountModif,
			'account-delete': AccountDelete
		}
	};
</script>
