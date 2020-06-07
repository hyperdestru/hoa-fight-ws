<template>
	<div class="avatar-picker">
		<h4 class="display-1">
			{{ $t('messages.tChooseAvatar') }}
		</h4>
		<div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AvatarPicker',

		data: () => ({
			images: [
			]
		})
	}
</script>