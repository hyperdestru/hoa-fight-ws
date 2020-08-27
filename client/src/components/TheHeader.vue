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
			<header-logo>
			</header-logo>

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
	import HeaderLogo from '@/components/HeaderLogo';

	export default {
		name: 'TheHeader',

		components: {
			'dropdown-menu': DropdownMenu,
			'classic-menu': ClassicMenu,
			'header-logo': HeaderLogo
		}
	}
</script>

