<template lang="html">
	<section id="other" class="other">
		<div class="container _flex-row _j-around">
			<div class="column _other">
				<button @click="saveFilter()"
					class="save-button waves-effect waves-light"
					type="button"
					>Сохранить фильтры запчастей</button>
				<ul class="filter-list">
					<li v-for="( filterItem , index ) in Filter" :key="filterItem"
						class="filter-item"
						>
						<span class="filter-item__content">{{ filterItem }}</span>
						<button @click="Filter.splice( index , 1 )"
							class="filter-item__remove waves-effect waves-light"
							type="button"
							>X</button>
					</li>
				</ul>
				<label for="addFilter" class="filter-add">
					<input v-model="newFilter"
						:placeholder="placeholder"
						class="filter-add__input"
						type="text"
						id="addFilter"
					/>
					<button @click="Filter.push( newFilter ), newFilter = '' "
						class="filter-add__button waves-effect waves-light"
						type="button"
						>
						<i class="filter-add__icon material-icons">add</i>
					</button>
				</label>

			</div>
			<div class="column _other">
				<button @click="saveTestDrive()"
					class="save-button waves-effect waves-light"
					type="button"
					>Сохранить авто для тест-драйва</button>

				<ul class="filter-list">
					<li v-for="( testDriveItem , index ) in TestDrive" :key="testDriveItem"
						class="filter-item"
						>
						<span class="filter-item__content">{{ testDriveItem }}</span>
						<button @click="TestDrive.splice( index , 1 )"
							class="filter-item__remove waves-effect waves-light"
							type="button"
							>X</button>
					</li>
				</ul>
				<label for="addTestDrive" class="filter-add">
					<input v-model="newTestDrive"
						:placeholder="placeholder"
						class="filter-add__input"
						type="text"
						id="addTestDrive"
					/>
					<button @click="TestDrive.push( newTestDrive ), newTestDrive = '' "
						class="filter-add__button waves-effect waves-light"
						type="button"
						>
						<i class="filter-add__icon material-icons">add</i>
					</button>
				</label>

			</div>
		</div>
		<div class="container">
			<h2 class="other__title">Редактирование раздела "Об автосалоне" на главной странице</h2>
		    <vue-editor v-model="mainPage"
		    	:editorToolbar="customToolbar"
				class="editor-container__editor"
		    	>
	    	</vue-editor>
			<button @click="saveMainPage()"
				class="save-button waves-effect waves-light"
				type="button"
				>Сохранить изменения на главной странице</button>
		</div>
	</section>
</template>

<script>

	import { VueEditor } from 'vue2-editor';

	export default {
		name: "other",
		components: { VueEditor },
		data() {
			return {
				Filter: [],
				TestDrive: [],
				newFilter: '',
				newTestDrive: '',
				mainPage: '',
				placeholder: 'Добавить пункт',
			}
		},
		mounted() {
			const filter = [];
			for ( let i of this.$state.content.Filter.categories ) {
				filter.push( i );
			};
			this.Filter = filter;
			const testDrive = [];
			for ( let i of this.$state.content.TestDrive.options ) {
				testDrive.push( i );
			};
			this.TestDrive = testDrive;
			let main = '';
			let final = main.concat( this.$state.content.TestDrive.description );
			this.mainPage = final;
			console.log( final );
		},
		computed: {
			customToolbar() {
				return this.$state.setttings.customToolbar
			}
		},
		methods: {
			saveTestDrive() {
				this.$store.dispatch( 'saveTestDrive' , this.TestDrive );
			},
			saveFilter() {
				this.$store.dispatch( 'saveFilter' , this.Filter );
			},
			saveMainPage() {
				this.$store.dispatch( 'saveMainPage' , this.mainPage );
			}
		}
	}

</script>

<style lang="scss" scoped>

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.other {
		&__title {
			margin: 16px 0;
		}
	}

	.column {
		&._other {
			width: 45%;
		}
	}

	.save-button {
		@include MDButton( $white , $green ) {
			size: 100% 3rem;
			margin-top: 16px;
			line-height: 3rem;
		};
	}

	.filter-list {}

	.filter-item {
		position: relative;
		margin: 8px 0;
		padding: 8px;
		background-color: $whited;
		@include MDShadow-1;
		&__content {}
		&__remove {
			@include MDButton( $white , $red) {
				position: absolute;
				top: 0;
				right: 0;
				size: 10% 100%;
			};
		}
	}

	.filter-add {
		display: flex;
		align-items: center;
		margin: 1rem 0;
		background-color: $red;
		@include MDShadow-1
		&__icon {
			text-align: center;
			font-size: 2rem;
			line-height: 3rem;
			color: $whited;
			text-shadow:
					0 4px 5px rgba($blacked, 0.14),
					0 1px 10px rgba($blacked, 0.12),
					0 2px 4px rgba($blacked, 0.3);
			cursor: pointer;
		}
		&__input {
			size: 90% 3.5rem;
			padding: 0 1rem;
			margin: 0;
			font-size: 1rem;
			color: $red $whited;
			border: solid 3px $red;
			transition:
				color .3s ease-in-out,
				background-color .3s ease-in-out;
			&::placeholder {
				color: rgba($black , .5)
			}
		}
		&__button {
			width: 10%;
			background-color: $red;
			border: none
		}
	}
</style>
