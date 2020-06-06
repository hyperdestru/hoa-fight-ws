<template>
	<div class="header secondary">
		<v-container 
			fluid 
			class="
				d-flex
				flex-row
				justify-space-between
				align-center
			"
		>
			<v-icon :x-large="$vuetify.breakpoint.smAndUp">
				mdi-alien
			</v-icon>

			<v-list 
				v-if="$vuetify.breakpoint.mdAndUp" 
				class="menu-list"
			>
				<v-list-item-group class="d-flex text-uppercase">
					<v-list-item v-for="(page, index) in pages" :key="index">
						<v-list-item-content>
							<v-list-item-title>
								{{ $t(page.name) }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>

			<dropdown-menu 
				v-else-if="$vuetify.breakpoint.smAndDown"
				:items="pages"
			>
			</dropdown-menu>
			
		</v-container>
	</div>
</template>

<script>
	import DropdownMenu from '@/components/DropdownMenu'

	export default {
		name: 'Header',

		components: {
			'dropdown-menu': DropdownMenu
		},

		data: () => ({
			pages: [
				{
					name: 'messages.lkHome',
					link: "" 
				},
				{
					name: 'messages.lkRegister',
					link: "" 
				},
				{
					name: 'messages.lkLogin', 
					link: "" 
				}
			]
		})
	}
</script>

<style scoped>
	.header .menu-list {
		background: none;
	}
</style>

