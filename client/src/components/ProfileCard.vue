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

		<div
			style="height: 300px"
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
				color="primary"
			>
				<v-icon>mdi-account</v-icon>
			</v-avatar>

			<ul 
				style="list-style-type: none" 
				class="pa-0 user-details"
			>
				<li>
					{{ $t("messages.lEmail") }} : {{ user.email }}
				</li>
				<li>
					{{ $t("messages.lUsername") }} : {{ user.username }}
				</li>
				<li>
					{{ $t("messages.pCreatedAt") }} : {{ user.creationDate }}
				</li>
			</ul>

			<v-btn :to="{name: 'settings'}" min-width="100%" tile>
				{{ $t('messages.ctaModifProfile') }}
			</v-btn>
		</div>
	</v-card>
</template>

<script>
	export default {
		name: "ProfileCard",
		
		data: () => ({
			user: {
				email: "emy@mail.com",
				username: "Emy87",
				creationDate: "19/06/2020"
			}
		}),
	}
</script>