<template>
	<div class="settings">
		<h3 class="text-center pa-8 display-1">
			{{ $t('messages.tModifProfile') }}
		</h3>
		<v-container 
			class="
				d-flex 
				flex-xl-row
				flex-lg-row
				flex-md-row
				flex-sm-column
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
