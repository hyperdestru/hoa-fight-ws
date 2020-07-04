<template>
	<v-card tile>
		<h3 class="pa-4 text-center">
			{{ title }}
		</h3>
		<v-card-text class="text-center">
			{{ text }}
		</v-card-text>
	</v-card>
</template>

<script>
	/**
	 * Composant affichant les informations obligatoires (via les props):
	 * RGPD (Politique de confidentialité, data)
	 * CGU (Conditions générales d'utilisation - Terms)
	 * Politique sur les cookies (Cookies policy)
	 */
	export default {
		name: 'MandatoryInfoCard',

		props: {
			text: {
				type: String,
				required: true
			},
			
			title: {
				type: String,
				required: true
			}
		}
	}
</script>