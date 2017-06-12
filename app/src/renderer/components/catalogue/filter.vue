<template lang="html">
	<section id="tabs" class="tabs">
		<div class="container _flex-column">

			<p class="information">
				Здесь можно отредактировать цены и наименования, которые отображаются в разделе КАТАЛОГ.<br />
				Обратите внимание, что при изменении цены и/или наименования Вам также нужно отредактировать эти данные на странице с информацией об отдельных автомобилях.
			</p>

			<div class="tabs-container">
				<button v-for = "buttonItem in Buttons" :key = "buttonItem.key"
					@click = "changeComponent(buttonItem.component)"
					class="tabs-container__button"
					type="button"
					ripple-light
					>{{ buttonItem.name }}</button>
			</div>

			<transition name="fade" mode="out-in">
				<component :is = "selected"></component>
			</transition>

		</div>
	</section>
</template>

<script>

	import chery from './filter/chery'
	import changan from './filter/changan'
	import hawtai from './filter/hawtai'

	export default {
		name: 'filters',
		components: { chery , changan , hawtai },
		data() {
			return {
				Buttons: [
					{
						name: 'Chery',
						component: 'chery'
					},
					{
						name: 'Hawtai',
						component: 'hawtai'
					},
					{
						name: 'Changan',
						component: 'changan'
					}
				],
				selected: 'chery'
			}
		},
		methods: {
			changeComponent(selected) {
				this.selected = selected
			}
		}
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.tabs-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	    &__button {
	        width: 200px;
	        padding: 10px 0;
	        text-align: center;
	        font-size: 1.3rem;
	        color: $white $red;
			border: none;
	        @include MDShadow-2
	    }
	}

	.tab-auto {
		&__save-changes {
			@include MDButton( $white, $green ) {
				size: 250px 3rem;
				margin-top: 16px;
			}
		}
	}

	.information {
		align-self: center;
		width: 75%;
		padding: 32px;
		margin-bottom: 32px;
		background-color: $white;
		@include MDShadow-2;
	}

</style>
