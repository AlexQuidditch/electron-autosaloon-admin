<template lang="html">
	<section id="prices" class="prices">
		<div class="save-changes container _flex-row _j-between _a-center">
			<button @click="saveChanges()"
				class="save-changes__button"
				type="button" ripple-light
				>Сохранить изменения</button>
			<p class="save-changes__information">
				На данной странице можно отредактировать цены и наименования, которые находятся на отдельных страницах каждого автомобиля.<br />
				<br />
				Перед началом редактирования ОБЯЗАТЕЛЬНО РАЗВЕРНИТЕ ВСЕ ТРИ КОЛОНКИ со списками автомобилей! В противном случае, данные в неразвёрнутых колонках будут уничтожены без возможности восстановления.<br />
				<br />
				По завершении редактирования нажмите кнопку "Сохранить изменения", и перейдите на любую другую страницу. После этого данные в колонках будут обновлены.
			</p>
		</div>

		<div class="container _wide _flex-row _j-between">
			<div class="column">
				<button @click = "initializeEditor('chery')"
					:class="{ '_hidden' : Buttons.chery }"
					class="column__button waves-effect waves-light"
					type="button"
					>CHERY</button>
				<div id="chery" class="column__content"></div>
			</div>
			<div class="column">
				<button @click = "initializeEditor('changan')"
					:class="{ '_hidden' : Buttons.changan }"
					class="column__button waves-effect waves-light"
					type="button"
					>CHANGAN</button>
				<div id="changan" class="column__content"></div>
			</div>
			<div class="column">
				<button @click = "initializeEditor('hawtai')"
					:class="{ '_hidden' : Buttons.hawtai }"
					class="column__button waves-effect waves-light"
					type="button"
					>HAWTAI</button>
				<div id="hawtai" class="column__content"></div>
			</div>
		</div>
	</section>
</template>

<script>

export default {
	name: "prices-page",
	data() {
		return {
			Cars: {
				chery: null,
				changan: null,
				hawtai: null
			},
			Buttons: {
				chery: false,
				changan: false,
				hawtai: false
			}
		}
	},
	computed: {
		Schema() {
			return this.$store.state.MainPage.schema
		}
	},
	methods: {
		initializeEditor(element) {
			const mainPageEditor = new JSONEditor(
				document.getElementById(element) , {
					schema: this.Schema
				}
			);
			mainPageEditor.setValue( this.$store.state.content.Cars[element] );
			mainPageEditor.on("change",  () => {
				let data = mainPageEditor.getValue();
				this.Cars[element] = data;
			});
			this.Buttons[element] = true;
		},
		saveChanges() {
			this.$swal({
				title: 'Сохранить изменения?',
				text: "Будьте осторожны, отменить их нельзя!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#ea6153',
				cancelButtonColor: '#9e9e9e',
				confirmButtonText: 'Сохранить',
				cancelButtonText: 'Отмена'
			})
			.then( () => {
				this.$store.dispatch( 'saveCars' , this.Cars );
				this.$swal(
					'Сохранено!',
					'Внесённые Вами изменения будут отображены на сайте.',
					'success'
				);
			});
		}
	}
}

</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.save-changes {
		padding: 1rem 0;
		&__button {
			@include MDButton( $white, $green ) {
				size: 250px 3rem;
			}
		}
		&__information {
			width: 65%
		}
	}

	.column {
		display: flex;
		flex-flow: column wrap;
		width: 33%;
		&__button {
			@include MDButton( $white, $red ) {
				size: 90% 3rem;
				margin: 0 5%;
			}
			&._hidden {
				opacity: 0;
				visibility: hidden;
			}
		}
		&__content {
			margin-top: 20px;
		}
	}

	.col-md-6 {
		padding: 0 10px;
	}

	.col-md-12 {
		> label {
			font-size: 2rem;
		}
		select {
			display: none !important
		}
		.well.well-sm > div > div > label,
		.well.well-sm div div div:nth-child(3) div:nth-child(3) h3,
		.well.well-sm div div div:nth-child(4),
		.well.well-sm div div div:nth-child(5) {
			display: none;
		}
	}

</style>
