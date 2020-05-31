<template>
	<v-row justify="center">
		<v-col cols="10">
			<v-card 
				tile
				min-height="450px"
				min-width="290px"
				class="card d-flex flex-column align-center"
			>
				<v-card-title class="text-uppercase">
					Profil
				</v-card-title>

				<div 
					class="
						card-content 
						mt-10 
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
						color="#3F5CD0"
					>
						<v-icon>mdi-account</v-icon>
					</v-avatar>

					<ul class="user-details">
						<li>
							{{ $t("messages.email") }} : {{ user.email }}
						</li>
						<li>
							{{ $t("messages.username") }} : {{ user.username }}
						</li>
						<li>
							{{ $t("messages.createdAt") }} : {{ user.createdAt }}
						</li>
					</ul>

					<v-btn min-width="100%">
						{{ $t("messages.ctaModifProfile") }}
					</v-btn>
				</div>

			</v-card>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		name: "ProfileCard",
		
		data: () => ({
			user: {
				email: "emy@mail.com",
				username: "Emy87",
				createdAt: "19/06/2020"
			}
		}),
	}
</script>

<style scoped>
	.card .user-details {
		list-style-type: none;
		padding: 0;
	}
	.card .card-content {
		height: 300px;
	}
</style>