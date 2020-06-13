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
					<a 	
						style="text-decoration: none"
						class="primary--text"
						v-on:click.prevent 
						v-bind:href="page.link"
					> 
						{{ $t(page.name) }}
					</a>
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