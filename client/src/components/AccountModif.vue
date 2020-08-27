<template>
	<v-card 
		tile
		class="
			card
			pa-4
			d-flex

			flex-column
			justify-space-between
			align-center

			flex-sm-column
			justify-sm-space-between
			align-sm-center

			flex-md-row
			justify-md-space-between
			align-md-start

			flex-lg-row
			justify-lg-space-between
			align-lg-start

			flex-xl-row
			justify-xl-space-between
			align-xl-start
		"
	>	
		<div class="pa-4 d-flex flex-column">
			<v-avatar
				tile
				width="128px"
				height="128px"
				color="primary"
			>
				<img 
					:src="avatarPath"
					alt="Ton avatar Hoa Fight"
				>
			</v-avatar>

			<avatar-picker-btn>
			</avatar-picker-btn>

			<delete-account-btn>
			</delete-account-btn>
		</div>

		<account-modif-form>
		</account-modif-form>
	</v-card>
</template>

<script>
	import DeleteAccountBtn from '@/components/DeleteAccountBtn';
	import AvatarPickerBtn from '@/components/AvatarPickerBtn';
	import AccountModifForm from '@/components/AccountModifForm';

	export default {
		name: "AccountModif",

		components: {
			'delete-account-btn': DeleteAccountBtn,
			'avatar-picker-btn': AvatarPickerBtn,
			'account-modif-form': AccountModifForm
		},

		data: () => ({
			avatarPath: "http://localhost:3000/images/avatars/avatar1.jpg"
		})
	}
</script>