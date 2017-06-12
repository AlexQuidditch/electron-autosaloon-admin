<template lang="html">
	<section id="credit" class="credit">
		<div class="container">

			<h2 class="editor-container__title">{{ title }}</h2>

			<input v-model = "Editable.title"
				:placeholder = "titlePlaceholder"
				class="editor-container__input"
				type="text"
			/>

		    <vue-editor v-model="Editable.subTitle"
				id="subTitle"
		    	:editorToolbar="customToolbar"
				:placeholder = "subTitlePlaceholder"
				class="editor-container__editor _sub-title"
		    	>
	    	</vue-editor>

		    <vue-editor v-model="Editable.content"
				id="content"
		    	:editorToolbar="customToolbar"
				:placeholder = "editorPlaceholder"
				class="editor-container__editor"
		    	>
	    	</vue-editor>

			<div class="editor-container__footer">
				<button @click = "saveChanges()"
					key = "save"
					class="editor-container__button _send waves-effect waves-light"
					type="button"
					>Сохранить</button>

				<button @click = "clear()"
					key = "clear"
					class="editor-container__button _clear waves-effect waves-light"
					type="button"
					>Очистить</button>
			</div>

		</div>
	</section>
</template>

<script>

	import { VueEditor } from 'vue2-editor';

	export default {
		name: 'credit',
		components: { VueEditor },
		data() {
			return {
				title: 'Авто-кредит: блок информации слева',
				titlePlaceholder: 'Заголовок страницы',
				subTitlePlaceholder: 'Подзаголовок страницы',
				editorPlaceholder: 'Содержимое блока...'
			}
		},
		computed: {
			Editable() {
				return this.$state.content.Services.credit
			},
			customToolbar() {
				return this.$state.setttings.customToolbar
			}
		},
		methods: {
			saveChanges() {
				this.$store.dispatch( 'saveServices' , [ 'credit' , this.Editable ] );
				this.$swal(
					'Сохранено!',
					'Изменения сохранены.',
					'success'
				);
			},
			clear() {
				this.$swal(
					{
						title: 'Вы уверены?',
						text: "Отменить действие нельзя!",
						type: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#e74c3c',
						cancelButtonColor: '#9e9e9e',
						confirmButtonText: 'Да, удалить черновик',
						cancelButtonText: 'Отмена'
					}
				)
				.then( () => {
					this.$swal(
						'Удалено!',
						'Содержимое очищено',
						'success'
					);
					this.Editable.content = ''
				})
			}
		}
	}

</script>
