<template>
	<v-list class="nav" color="secondary">
		<v-list-item-group 
			class="text-uppercase" 
			:class="{ 'd-flex': !dropdown }"
		>
			<v-list-item
				@click="redirect"
				v-for="(page, index) in pages" 
				:key="index"
			>
				<v-list-item-content>
					<v-list-item-title>
						<router-link tag="li" :to="{name: page.route}">
							{{ $t(page.name) }}
						</router-link>
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
			pages: [
				{
					name: 'messages.lkHome',
					route: 'home'
				},
				{
					name: 'messages.lkRegister',
					route: 'register'
				},
				{
					name: 'messages.lkLogin', 
					route: 'login'
				}
			]
		}),

		methods: {
			redirect: function() {
				console.log("Redirection WIP");
			}
		}
	}
</script>