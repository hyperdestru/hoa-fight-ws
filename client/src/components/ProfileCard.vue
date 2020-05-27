<template>
	<v-card tile class="card pa-10 d-flex flex-column align-center">
		<v-card-title class="pa-0 text-uppercase">
			Profil
		</v-card-title>
		<v-avatar tile width="100px" height="100px" color="#3F5CD0">
			<v-icon>mdi-account</v-icon>
		</v-avatar>
		<ul class="user-details">
			<li> {{ $t("messages.email") }} : {{ user.email }} </li>
			<li> {{ $t("messages.username") }} : {{ user.username }} </li>
			<li> {{ $t("messages.createdAt") }} : {{ user.createdAt }} </li>
		</ul>
		<v-btn>
			{{ $t("messages.ctaModifProfile") }}
		</v-btn>
	</v-card>
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
</style>