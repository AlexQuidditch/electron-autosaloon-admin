<template lang="html">
	<section id="services" class="services">
		<div class="container _flex-column">
			<div class="tabs-container _start _service">
				<router-link v-for = "buttonItem in Buttons" :key = "buttonItem.name"
					tag = "button"
					:to = "{ query: { select: buttonItem.component } }"
					class="tabs-container__button _service waves-effect waves-light"
					type="button"
					>{{ buttonItem.name }}</router-link>
			</div>
		</div>

		<transition name="fade" mode="out-in">
			<component :is = "$route.query.select"></component>
		</transition>
	</section>
</template>

<script>

	import sCredit from './services/credit'

	export default {
		name: 'services',
		components: { sCredit },
		data() {
			return {
				Buttons: [
					{
						name: 'Авто-кредит',
						component: 'sCredit'
					}
				]
			}
		},
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

	.tabs-container {
		&._service {
			margin-top: 32px;
		}
		&__button {
			&._service {
				width: auto;
				padding-left: 32px;
				padding-right: 32px;
				margin-right: 32px;
				@include MQ(Pp) {
					width: 80%;
					margin: 0 auto 16px auto;
					padding: 0;
				};
			}
		}
	}

</style>
