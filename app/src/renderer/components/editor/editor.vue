<template lang="html">
	<section id="editor" class="editor">
		<div class="container">

			<h2 class="editor-container__title">{{ title }}</h2>
			<input v-model = "Editor.title"
				:placeholder = "Editor.titlePlaceholder"
				class="editor-container__input"
				type="text"
			/>
		    <vue-editor v-model="Editor.content"
		    	:editorToolbar="customToolbar"
				:placeholder = "Editor.contentPlaceholder"
		    	>
	    	</vue-editor>

			<transition-group name = "fade" tag = "div" class = "editor-container__footer">

				<button v-if = "Editor.btnAllow"
					@click = "sent()"
					key = "sent"
					class="editor-container__button _send waves-effect waves-light"
					type="button"
					>Отправить</button>

				<button v-if = "Editor.btnAllow"
					@click = "clear()"
					key = "clear"
					class="editor-container__button _clear waves-effect waves-light"
					type="button"
					>Очистить</button>

			</transition-group>
		</div>
	</section>
</template>

<script>

	import { VueEditor } from 'vue2-editor';

	export default {
		name: 'editor',
		components: { VueEditor },
		data() {
			return {
				title: 'Новый пост в блоге',
				Editor: {
					title: '',
					titlePlaceholder: 'Название поста...',
					time: new Date(),
					content: '',
					contentPlaceholder: 'Содержимое поста...',
					btnAllow: false,
				}
			}
		},
		computed: {
			customToolbar() {
				return this.$state.setttings.customToolbar
			}
		},
		watch: {
			'Editor.content': function() {
				if ( this.Editor.content.length >= 15 ) {
					this.Editor.btnAllow = true
				} else {
					this.Editor.btnAllow = false
				}
			}
		},
		methods: {
			sent() {
				let $data = this;
				let dateOptions = { minute: 'numeric',hour: 'numeric',day: 'numeric',month: '2-digit',year: '2-digit' };
				let post = {
					title: $data.Editor.title,
					time: $data.Editor.time.toLocaleString( 'ru-RU' , dateOptions ),
					content: $data.Editor.content
				};
				this.$store.dispatch( 'sendPost' , post );
				setTimeout( () => {
					this.Editor.title = '';
					this.Editor.content = '';
				} , 2000 );
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
						'Черновик очищен',
						'success'
					);
					this.Editor.title = ''
					this.Editor.content = ''
				})
			}
		}
	}

</script>
