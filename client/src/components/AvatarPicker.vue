<template>
	<div class="avatar-picker">
		<h4 class="display-1 mb-10">
			{{ $t('messages.tChooseAvatar') }}
		</h4>

		<v-row justify="center">
			<v-col cols="7">
				<v-hover 
					v-slot:default="{ hover }" 
					v-for="n in 10" :key="n"
				>
					<v-avatar
						@click="pickAvatar"
						tile
						width="64px"
						height="64px"
						:color="hover ? 'secondary' : 'accent'"
						class="avatar ma-1 transition-fast-in-fast-out"
					>
						<v-icon>mdi-account</v-icon>
					</v-avatar>
				</v-hover>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		name: 'AvatarPicker',

		data: () => ({
			avatars: [
				{ name: '', src: '' }
			]
		}),

		methods: {
			pickAvatar: function() {
				console.log("Avatar picking - WIP");
			}
		}
	}
</script>