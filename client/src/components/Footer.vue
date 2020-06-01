<template>
	<div class="footer">
		<v-container>
			<ul 
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
					<a v-on:click.prevent v-bind:href="page.link"> 
						{{ $t(page.name) }}
					</a>
				</li>
			</ul>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: "Footer",

		data: () => ({
			pages: [
				{
					name: 'messages.lkConfidentialityPolicy', 
					link: ""
				},
				{
					name: 'messages.lkTermsOfUse',
					link: ""
				},
				{
					name: 'messages.lkCookiesPolicy',
					link: ""
				}
			]
		})
	}
</script>

<style scoped>
	.footer {
		background-color: #eeeeee;
	}
	.footer ul {
		list-style-type: none;
	}
	.footer a {
		text-decoration: none;
	}
</style>