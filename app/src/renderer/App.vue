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
		created() {
			this.$store.dispatch( 'fetchFromServer' , 'Catalogue' );
			this.$store.dispatch( 'fetchFromServer' , 'Cars' );
			this.$store.dispatch( 'fetchFromServer' , 'Service' );
			this.$store.dispatch( 'fetchFromServer' , 'Services' );
			this.$store.dispatch( 'fetchFromServer' , 'Filter' );
			this.$store.dispatch( 'fetchFromServer' , 'TestDrive' );
			this.$store.dispatch( 'fetchFromServer' , 'Videos' );
		},
		mounted() {
			this.$nextTick( () => {
				Waves.init();
				Waves.attach('[ripple-dark]', ['waves-dark']);
				Waves.attach('[ripple-light]', ['waves-light']);
			})
		}
	}

</script>

<style src="./static/css/normalize.css" lang="css"></style>

<style lang="scss">

	@import "./scss/partials/_layout";
	@import "./scss/partials/_mixins";
	@import "./scss/partials/_variables";

	@import "./scss/layout/resets";

	html , body {
		size: 100%;
		background-color: $whited;
		font-size: 16px;
		touch-action: manipulation;
	}
	.wrapper {
		color: $black;
		font-family: 'Roboto Condensed', sans-serif;
		@include font-smoothing;
	}
	.main {
		min-height: 100vh;
		padding: 20px 0;
	}
	.container {
		width: $containersWidth;
		height: 100%;
		margin: 0 auto;
		&::before , &::after {
			display: none;
		}
		&._wide {
			width: 100%
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

	@include waves-light( $whited, $ripple-opacity);
	@include waves-dark( $red, $ripple-opacity);

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

	.editor-container {
		&__title {
			margin: 16px 0;
		}
		&__input {
			width: 100%;
			margin: 1rem 0;
			padding: 0 1rem;
			line-height: 3;
			color: $black transparent;
			border: solid 2px $red;
			outline: none;
			transition: box-shadow .3s ease-in-out;
			&:focus {
				@include MDShadow-1;
			}
		}
		&__editor {
			border: solid 2px $red;
			&._sub-title {
				margin-bottom: 16px;
				#quill-container {
					min-height: 5rem;
				}
			}
			#quill-container {
				min-height: 15rem;
				height: auto;
			}
		}
		&__footer {
			height: 72px;
		}
		&__button {
			@include MDButton($white, $red) {
				size: 12.5rem 2.5rem;
				margin: 1rem 0;
				margin-right: 1rem;
			}
			&._send {
				background-color: $green
			}
			&._clear {}
		}
	}
	.ql-container {
		.ql-editor {
			font-size: 1rem;
		}
	}

</style>
