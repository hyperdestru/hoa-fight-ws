<template>
	<div>
		<v-btn 
			@click="overlay = !overlay"
			min-width="100%" 
			small 
			tile 
			color="primary"
			class="mt-2"
		>
			<v-icon small>
				mdi-pencil
			</v-icon>
			modifier
		</v-btn>

		<v-overlay 
			:value="overlay"
			opacity="0.95"
			color="primary"
			class="text-center"
		>
			<avatar-picker>
			</avatar-picker>

			<v-btn 
				@click="overlay=false" 
				icon 
				x-large 
				class="mt-10"
			>
				<v-icon>
					mdi-close
				</v-icon>
			</v-btn>
		</v-overlay>
	</div>
</template>

<script>
	import AvatarPicker from '@/components/AvatarPicker';

	export default {
		name: "AvatarPickerBtn",

		components: {
			'avatar-picker': AvatarPicker
		},

		data: () => ({
			overlay: false
		}),

		methods: {
			deleteAccount: function() {
				console.log("Account delete - WIP");
			}
		}
	}
</script>