<template lang="html">
	<section id="hawtai" class="tab-auto">
		<h3 class="tab-auto__title">Модельный ряд Hawtai</h3>
		<button @click="saveChanges()"
			class="tab-auto__save-changes"
			type="button" ripple-light
		>Сохранить изменения</button>
		<div id="hawtai"></div>
	</section>
</template>

<script>

	import catalogueItem from '../../templates/catalogue-item';

	export default {
		name: 'hawtai',
		components: { catalogueItem },
		data() {
			return {
				Catalogue: {
					hawtai: null
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
				this.$store.dispatch( 'saveCatalogueHawtai' , this.Catalogue.hawtai );
				this.$swal(
					'Сохранено!',
					'Изменения сохранены.',
					'success'
				);
			}
		},
		mounted() {
			this.initializeEditor('hawtai')
		}
	}

</script>
