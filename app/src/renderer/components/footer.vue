<template lang="html">
	<footer id="footer" class="footer">
		<div class="container">
			<h2 class="footer__title">Система управления данными сайта <b>angar-auto.ru</b></h2>
			<div class="contact-developer">
				<h3>Связаться с разработчиком:</h3>
				<ul>
					<li>Телефон: +7 (996) 937-84-75</li>
					<li>E-mail: AlexQuidditch@yandex.ru</li>
					<li>Skype: Alex_Quidditch</li>
					<li>Telegram: @AlexQuidditch</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'footer'
	}
</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.footer {
		padding: 40px 0;
	}

	.contact-developer {
		h3 {
			line-height: 2;
		}
		li {
			line-height: 1.5;
		}
	}

</style>
