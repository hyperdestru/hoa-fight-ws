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
			<v-btn icon>
				<v-icon :x-large="$vuetify.breakpoint.smAndUp">
					mdi-boxing-glove
				</v-icon>
			</v-btn>

			<classic-menu v-if="$vuetify.breakpoint.mdAndUp">
			</classic-menu>

			<dropdown-menu v-else-if="$vuetify.breakpoint.smAndDown">
			</dropdown-menu>
		</v-container>
	</div>
</template>

<script>
	import DropdownMenu from '@/components/DropdownMenu';
	import ClassicMenu from '@/components/ClassicMenu';

	export default {
		name: 'TheHeader',

		components: {
			'dropdown-menu': DropdownMenu,
			'classic-menu': ClassicMenu
		}
	}
</script>

