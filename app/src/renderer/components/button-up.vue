<template lang="html">
	<button	v-scroll-to="{
			el: 'body',
			offset: 0,
			duration: 950
		}"
		id="button-up" class="button-up" ripple-light>
  	   	<i class="button-up__icon material-icons">arrow_upward</i>
	</button>
</template>

<script>
	export default {
  		name: "button-up",
      	data() {
			return { isVisible: false }
      	},
		created() {
			window.onscroll = () => {
				const buttonUp = document.getElementById('button-up');
				let scrolled = window.pageYOffset || document.documentElement.scrollTop;
				if (scrolled > 350) {
					buttonUp.classList.add('_visible')
				} else {
					buttonUp.classList.remove('_visible')
				}
			};
		}
	}
</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.button-up {
		$size: 75px;
		@include MDButton( $whited , $red ) {
			z-index: 900;
			position: fixed auto 0 0 auto;
			size: $size;
			margin: 2vh;
			transform: translateX( calc(100% + 3vh) );
		}
		@include MDShadow-3;
		&:active {
			@include MDShadow-4;
		}
		&._visible {
			transform: translateX(0);
		}
		&__icon {
			font-size: $size / 1.25;
		}
	}

</style>
