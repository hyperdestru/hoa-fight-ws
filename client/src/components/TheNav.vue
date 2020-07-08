<template>
	<v-list class="nav" color="secondary" flat>
		<v-list-item-group 
			class="text-uppercase" 
			:class="{ 'd-flex': !dropdown }"
		>
			<v-list-item 
				v-for="(page, index) in currentNav()"
				:key="index"
				@click="navRedirect(page)"
			>
				<v-list-item-content>
					<v-list-item-title>
						{{ $t(page.name) }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list-item-group>
	</v-list>
</template>

<script>
	export default {
		name: 'TheNav',

		props: {
			dropdown: {
				type: Boolean,
				required: false
			}
		},

		data: () => ({			
			nav: {
				logged: [
					{ name: 'messages.lkHome', route: 'home' },
					{ name: 'messages.lkRanking', route: 'ranking' },
					{ name: 'messages.lkDashboard', route: 'dashboard' },
					{ name: 'messages.lkSignOut', route: 'home', signOut: true }
				],
				public: [
					{ name: 'messages.lkHome', route: 'home' },
					{ name: 'messages.lkRegister', route: 'register' },
					{ name: 'messages.lkLogin', route: 'login' }
				]
			}
		}),

		methods: {
			currentNav: function() {
				if (this.$store.getters.auth === true) {
					return this.nav.logged;
				} else {
					return this.nav.public;
				}
			},
			navRedirect: function(page) {
				if (page.signOut === true) {

					this.$store.dispatch('flush');

					this.$router.replace({
						name: page.route,
						params: {
							signOut: page.signOut
						}
					});

				} else {

					if (this.$route.name !== page.route) {
						this.$router.push({
							name: page.route
						});
					}

				}
			}
		}
	}
</script>

<style scoped>
	.routerLink {
		text-decoration: none; 
		color: #000;
	}
</style>