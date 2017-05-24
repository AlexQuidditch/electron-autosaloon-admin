<template lang="html">
	<section id="main-page" class="main-page">
		<div class="container _flex-row _j-between">
			<div class="column">
				<button @click = "initializeEditor('chery')"
					type="button"
					>CHERY</button>
				<div id="chery"></div>
			</div>
			<div class="column">
				<button @click = "initializeEditor('changan')"
					type="button"
					>CHANGAN</button>
				<div id="changan"></div>
			</div>
			<div class="column">
				<button @click = "initializeEditor('hawtai')"
				type="button"
				>HAWTAI</button>
				<div id="hawtai"></div>
			</div>
		</div>
	</section>
</template>

<script>

	export default {
		name: "main-page",
		data() {
			return {
				Cars: {
					chery: null,
					changan: null,
					hawtai: null
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
				const mainPageEditor = new JSONEditor( document.getElementById(element) , {
					schema: this.Schema
				});
				mainPageEditor.setValue( this.$store.state.content.Cars[element] );
				mainPageEditor.on("change",  () => {
					let data = mainPageEditor.getValue();
					this.Cars[element] = data;
				});
			}
		}
	}

</script>

<style lang="scss">

	.main-page {

	}
	.column {
		width: 30%;
	}
	.col-md-12 {
		> label {
			font-size: 3rem;
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
