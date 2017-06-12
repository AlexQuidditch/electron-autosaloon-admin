<template lang="html">
	<li class="mark">
		<h4 class="mark__title">{{ name }}</h4>
		<img :src="picture" :alt="name" class="mark__picture" />
		<router-link :to="{ path: '/catalogue', query: { filter : route }}"
			class="mark__link"
			ripple-light
			>Каталог</router-link>
	</li>
</template>

<script>
	export default {
		name: "mark",
		props: ['name', 'picture', 'route']
	}
</script>

<style lang="scss">
	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.mark {
	    display: flex;
	    flex-flow: column wrap;
		justify-content: space-between;
		align-items: center;
	    size: 350px 300px;
	    margin: 1rem 0;
	    background-color: $whited;
		&:first-child {
			width: 250px
		}
		@include MQ(Pp) {
			width: 100%
		}
	    &__title {
	    	font-size: 2rem;
	        line-height: 3rem;
	    }
	    &__picture {
	    	size: auto 75px;
	        object-fit: contain;
	    }
	    &__link {
	        @include MDButton($white, $red) {
	            size: 200px auto;
	            text-align: center;
	            line-height: 3rem;
	        };
	    }
	}
</style>
