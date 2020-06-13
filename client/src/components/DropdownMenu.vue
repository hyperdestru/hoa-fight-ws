<template>
	<v-menu>
		<template v-slot:activator="{ on }">
			<v-icon v-on="on">
				mdi-menu
			</v-icon>
		</template>

		<the-nav :dropdown="true">
		</the-nav>
	</v-menu>
</template>

<script>
	import TheNav from '@/components/TheNav'

	export default {
		name: 'DropdownMenu',

		components: {
			'the-nav': TheNav
		}
	}
</script>