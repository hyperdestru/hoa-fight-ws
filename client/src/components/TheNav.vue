<template>
	<v-list class="nav" color="secondary" flat>
		<v-list-item-group 
			class="text-uppercase" 
			:class="{ 'd-flex': !dropdown }"
		>
			<v-list-item
				v-for="(page, index) in pages.logged" 
				:key="index"
			>
				<router-link 
					:to="{name: page.route}"
					style="text-decoration: none; color: #000;"
				>
					<v-list-item-content>
						<v-list-item-title>
							{{ $t(page.name) }}
						</v-list-item-title>
					</v-list-item-content>
				</router-link>
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
			pages: {
				public: [
					{ name: 'messages.lkHome', route: 'home' },
					{ name: 'messages.lkRegister', route: 'register' },
					{ name: 'messages.lkLogin', route: 'login' }
				],
				logged: [
					{ name: 'messages.lkHome', route: 'home' },
					{ name: 'messages.lkRanking', route: 'ranking' },
					{ name: 'messages.lkDashboard', route: 'dashboard' },
					{ name: 'messages.lkSignOut', route: 'signout' }
				]
			}
		})
	}
</script>