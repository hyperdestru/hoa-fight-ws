<template>
	<div class="footer secondary">
		<v-container>
			<ul 
				style="list-style-type: none"
				class="
					pa-0
					d-flex
					flex-row
					justify-space-between
					align-center
				"
			>
				<li 
					v-for="(page, index) in pages" 
					:key="index"
					class="text-center caption"
				>
					<router-link :to="{name: page.route}"> 
						{{ $t(page.name) }}
					</router-link>
				</li>
			</ul>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "TheFooter",

		data: () => ({
			pages: [
				{
					name: 'messages.lkRgpd', 
					route: "rgpd"
				},
				{
					name: 'messages.lkCgu',
					route: "cgu"
				},
				{
					name: 'messages.lkCookiesPolicy',
					route: "cookies"
				}
			]
		})
	}
</script>