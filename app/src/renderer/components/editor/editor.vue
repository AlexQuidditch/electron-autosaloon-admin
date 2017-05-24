<template lang="html">
	<div class="container">
		<div class="editor-container">
			<h2 class="editor-container__title">{{ title }}</h2>
			<input v-model = "Editor.title"
				:placeholder = "Editor.placeholder"
				class="editor-container__input"
				type="text"
			/>
			<div class="editor-container__editor">
				<quill-editor ref="blogEditor"
					v-model="Editor.content"
					:options="Editor.options"
					@change="onEditorChange($event)"
					>
				</quill-editor>
			</div>
			<transition-group name = "fade" tag = "div" class = "editor-container__footer">
				<button v-if = "Editor.btnAllow" @click = "sent()" key = "sent"
					class="editor-container__button _send waves-effect waves-light"
					type="button"
					>Отправить</button>
				<button v-if = "Editor.btnAllow" @click = "clear()" key = "clear"
					class="editor-container__button _clear waves-effect waves-light"
					type="button"
					>Очистить</button>
			</transition-group>
		</div>
	</div>
</template>

<script>

	import Quill from 'quill';
	// import { ImageResize } from 'quill-image-resize-module';
	import { ImageDrop } from 'quill-image-drop-module';

	// Quill.register('modules/imageResize', ImageResize);
	Quill.register('modules/imageDrop', ImageDrop);

	export default {
		name: 'editor',
		data() {
			return {
				title: 'Новый пост в блоге',
				Editor: {
					title: '',
					placeholder: 'Название поста...',
					time: new Date(),
					content: '',
					btnAllow: false,
					options: {
						placeholder: 'Текст нового поста...',
						modules: {
							imageDrop: true,
							// imageResize: {
							// 	displaySize: true
							// }
						}
					}
				}
			}
		},
		methods: {
			onEditorChange({ editor, html, text }) {
				if ( html.length >=1 ) {
					this.Editor.btnAllow = true
				} else {
					this.Editor.btnAllow = false
				}
			},
			sent() {
				let $data = this;
				let dateOptions = {
					minute: 'numeric',
					hour: 'numeric',
					day: 'numeric',
					month: '2-digit',
					year: '2-digit'
				};
				let post = {
					title: $data.Editor.title,
					time: $data.Editor.time.toLocaleString('ru-RU' , dateOptions ),
					content: $data.Editor.content
				};
				this.$http.post('posts.json', post )
					.then( response => {
						$data.Editor = {
							title: '',
							content: ''
						};
						$data.$swal(
							'Ура!',
							'Пост добавлен, посмотрите в блоге.',
							'success'
						)
					})
					.catch( error => {
						$data.$swal(
							'Что-то пошло не так...',
							'Попробуйте ещё раз!',
							'error'
						)
					});
			},
			clear() {
				this.$swal({
					title: 'Вы уверены?',
					text: "Отменить действие нельзя!",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#2ecc71',
					cancelButtonColor: '#e74c3c',
					confirmButtonText: 'Да, удалить черновик',
					cancelButtonText: 'Отмена'
				})
				.then( () => {
					this.$swal(
						'Удалено!',
						'Черновик очищен.',
						'success'
					);
					this.Editor.title = ''
					this.Editor.content = ''
				})
			}
		},
		computed: {
			editor() {
				return this.$refs.blogEditor.quillEditor
			}
		}
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.editor-container {
		&__title {}
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
			outline: none;
			transition: box-shadow .3s ease-in-out;
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
			min-height: 20em;
			font-size: 1rem;
		}
	}

</style>
