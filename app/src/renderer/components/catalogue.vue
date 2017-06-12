<template lang="html">
	<main id="main" class="main">
		<Filters/>
	</main>
</template>

<script>

	import Filters from './catalogue//filter'

	export default {
		name: 'catalogue',
		components: { Filters },
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
		}
	}

</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.tab-auto {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		size: 100% auto;
		margin: 30px 0;
		&__title {
			font-size: 2.5rem;
			color: $black
		}
		&__list {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			width: 100%;
			margin-top: 1rem;
		}
		&__list-item {
			display: flex;
			flex-flow: row wrap;
			size: 350px auto;
			margin: 1rem 0;
			background-color: $whited;
			transition: box-shadow .3s ease-in-out;
			@include MDShadow-1;
			&:hover {
				@include MDShadow-2;
			}
		}
		&__list-item-title {
			line-height: 3.5rem;
		}
		&__list-item-image {
			size: 100% 200px;
			padding: 0 1rem;
			object-fit: contain;
		}
		&__list-item-description {
			padding: 0 1rem;
			line-height: 1.5rem;
		}
		&__list-item-footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: flex-end;
			size: 100% 3rem;
		}
		&__list-item-title {
			font-size: 1.5rem;
			padding-left: 1rem;
		}
		&__list-item-price {
			font-size: 1.25rem;
			padding-left: 1rem;
		}
		&__list-item-link {
			@include MDButton($white, $red) {
				size: 35% auto;
				text-align: center;
				line-height: 3rem;
				box-shadow: none !important;
			};
		}
	}

</style>
