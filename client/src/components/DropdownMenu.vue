<template>
	<v-menu>
		<template v-slot:activator="{ on }">
			<v-icon v-on="on">
				mdi-menu
			</v-icon>
		</template>

		<v-list>
			<v-list-item
				v-for="(item, index) in items"
				:key="index"
				@click="redirect"
			>
				<v-list-item-title>
					{{ $t(item.name) }}
				</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script>
	export default {
		name: "DropdownMenu",

		props: ['items'],
		
		data: () => ({
		}),

		methods: {
			redirect: function() {
				console.log("Redirection WIP");
			}
		}
	}
</script>