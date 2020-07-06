<template>
	<v-card 
		tile
		min-height="450px"
		min-width="290px"
		class="
			card 
			d-flex 
			flex-column 
			align-center
		"
	>
		<v-card-title class="title text-uppercase">
			{{ $t('messages.tProfile') }}
		</v-card-title>

		<ul 
			style="list-style-type: none; height: 315px;"
			class="
				card-content
				mt-10
				pl-0
				d-flex 
				flex-column
				justify-space-between
				align-center
			"
		>
			<v-avatar 
				tile 
				width="100px" 
				height="100px" 
				color="primary"
			>
				<v-icon>mdi-account</v-icon>
			</v-avatar>

			<ul style="list-style-type: none;" class="pl-0">
				<li>
					{{ $t("messages.lEmail") }} : 
					{{ userProfile.email }}
				</li>
				<li>
					{{ $t("messages.lUsername") }} : 
					{{ userProfile.username }}
				</li>
				<li>
					{{ $t("messages.pCreatedAt") }} : 
					{{ userProfile.creationDate }}
				</li>
			</ul>
			
			<v-btn 
				@click="goToSettings" 
				min-width="100%" tile
			>
				{{ $t('messages.ctaModifProfile') }}
			</v-btn>
		</ul>
	</v-card>
</template>

<script>
	export default {
		name: "ProfileCard",
		
		props: {
			userProfile: {
				type: Object,
				required: true
			}
		},

		methods: {
			goToSettings: function() {
				this.$router.push({
					name: 'settings',
					params: {
						userId: this.$store.getters.user.id
					}
				});
			}
		}
	}
</script>