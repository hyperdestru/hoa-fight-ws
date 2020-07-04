<template>
	<div class="black" style="width: 100%; height: 100%">
		<router-link :to="{name: 'dashboard'}">
			<span class="title">
				{{ $t('messages.lQuit') }}
			</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'TheGame'
	}
</script>