<template lang="html">
	<div id="wrapper" class="wrapper">
		<s-header></s-header>
		<main id="main" class="main">
			<transition name="fade" mode="out-in" appear>
		    	<router-view></router-view>
			</transition>
		</main>
		<s-footer></s-footer>
	</div>
</template>

<script>

	import sHeader from './components/header';
	import sFooter from './components/footer';

	export default {
		name: 'app',
		components: { sHeader , sFooter },
	};

</script>

<style src="./static/css/normalize.css" lang="css"></style>

<style lang="scss">

	@import "./scss/partials/_layout";
	@import "./scss/partials/_mixins";
	@import "./scss/partials/_variables";

	@import "./scss/layout/resets";

	html , body {
		size: 100%;
		touch-action: manipulation;
		background-color: $whited;
		font-size: 16px;
	}
	.wrapper {
		color: $black;
		font-family: 'Roboto Condensed', sans-serif;
		@include font-smoothing;
	}
	.main {
		min-height: calc(100vh - 400px);
		margin-top: $headerHeight;
		&._margin-none {
			margin-top: 0;
		}
	}
	.container {
		width: $containersWidth;
		height: 100%;
		margin: 0 auto;
		&::before , &::after {
			display: none;
		}
		&._wide {
			width: $containersWidth + 100px
		}
		&._flex-row {
			display: flex;
			flex-flow: row wrap;
		}
		&._flex-column {
			display: flex;
			flex-flow: column wrap;
		}
		&._flex-row,
		&._flex-column {
			&._j-start {
				justify-content: flex-start;
			}
			&._j-center {
				justify-content: center;
			}
			&._j-end {
				justify-content: flex-end;
			}
			&._j-around {
				justify-content: space-around;
			}
			&._j-between {
				justify-content: space-between;
			}
			&._a-start {
				align-items: flex-start;
			}
			&._a-center {
				align-items: center;
			}
			&._a-end {
				align-items: flex-end;
			}
		}
	}

	button {
		cursor: pointer;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .3s ease-in-out
	}

	.fade-slow-enter-active,
	.fade-slow-leave-active {
		transition: opacity .85s ease
	}
	.fade-slow-enter,
	.fade-slow-leave-to {
		opacity: 0
	}

	.fade-fast-enter,
	.fade-fast-leave-to {
		opacity: 0
	}
	.fade-fast-enter-active,
	.fade-fast-leave-active {
		transition: opacity .15s ease-in-out
	}

</style>
