<template>
	<div class="header">
		<v-container 
			fluid 
			class="
				d-flex
				flex-row
				justify-space-between
			"
		>
			<v-icon x-large>
				mdi-alien
			</v-icon>

			<v-list class="menu-list">
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
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'Header',

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
	.header {
		background-color: #eeeeee;
	}
	.header .menu-list {
		background: none;
	}
</style>

