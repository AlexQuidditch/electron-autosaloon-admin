<template lang="html">
	<div id="wrapper">
		<s-header></s-header>
		<main id="main" class="main">
	    	<router-view></router-view>
		</main>
		<s-footer></s-footer>
	</div>
</template>

<script>

	import store from 'renderer/vuex/store'
	export default { store }

</script>

<style src="./static/css/normalize.css" lang="css"></style>

<style lang="scss">

	html , body {
	    size: 100%;
	}

	body {
		color: gray white;
		font-family: 'Roboto Condensed', sans-serif;
	}

</style>
