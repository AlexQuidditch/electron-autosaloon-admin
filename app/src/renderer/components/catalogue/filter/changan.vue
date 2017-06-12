<template lang="html">
	<section id="changan" class="tab-auto">
		<h3 class="tab-auto__title">Модельный ряд Changan</h3>
		<button @click="saveChanges()"
			class="tab-auto__save-changes"
			type="button" ripple-light
		>Сохранить изменения</button>
		<div id="changan"></div>
	</section>
</template>

<script>

	import catalogueItem from '../../templates/catalogue-item';

	export default {
		name: 'changan',
		components: { catalogueItem },
		data() {
			return {
				Catalogue: {
					changan: null
				}
			}
		},
		computed: {
			catalogueItem() {
				return this.$state.MainPage.catalogueItem
			}
		},
		methods: {
			initializeEditor(element) {
				const mainPageEditor = new JSONEditor(
					document.getElementById(element) , {
						schema: this.catalogueItem
					}
				);
				mainPageEditor.setValue( this.$state.content.Catalogue[element] );
				mainPageEditor.on("change",  () => {
					let data = mainPageEditor.getValue();
					this.Catalogue[element] = data;
				});
			},
			saveChanges() {
				this.$store.dispatch( 'saveCatalogueChangan' , this.Catalogue.changan );
				this.$swal(
					'Сохранено!',
					'Изменения сохранены.',
					'success'
				);
			}
		},
		mounted() {
			this.initializeEditor('changan')
		}
	}

</script>
