<template>
	<the-nav :dropdown="false">
	</the-nav>
</template>

<script>
	import TheNav from '@/components/TheNav';
	
	export default {
		name: "ClassicMenu",

		components: {
			"the-nav": TheNav
		}
	}
</script>