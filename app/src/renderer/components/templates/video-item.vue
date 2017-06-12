<template lang="html">
	<li	class="video-item">
		<h5 class="video-item__title">{{ Item.title }}</h5>
		<ul class="video-item__sublist">
			<li v-for="( videotem , index ) in Item.video" :key="videotem"
				class="sublist-item"
				>{{ videotem }}
				<button @click="Item.video.splice( index , 1 )"
					class="sublist-item__remove waves-effect waves-light"
					type="button"
					>X</button>
			</li>
		</ul>
		<label class="video-add">
			<input v-model="newVideo"
				placeholder="Добавить видео"
				class="video-add__input"
				type="text"
			/>
			<button @click="Item.video.push( newVideo ), newVideo = '' "
				class="video-add__button waves-effect waves-light"
				type="button"
				>
				<i class="video-add__icon material-icons">add</i>
			</button>
		</label>
	</li>
</template>

<script>

	export default {
		name: "video",
		props: {
			Item : {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				newVideo: ''
			}
		}
	}

</script>

<style lang="scss">

	@import '../../scss/partials/_mixins';
	@import '../../scss/partials/_layout';
	@import '../../scss/partials/_variables';

	.video-item {
		size: 30% auto;
		padding: 20px;
		margin: 16px 0;
		@include MDShadow-1;
		transition: .3s ease-in-out;
		&:hover {
			@include MDShadow-2;
		}
		&__title {
			text-align: right;
			font-size: 22px;
		}
		&__sublist {}
	}

	.sublist-item {
		position: relative;
		min-height: 38px;
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
				size: 20% 100%;
			};
		}
	}

	.video-add {
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
			width: 20%;
			background-color: $red;
			border: none
		}
	}

</style>
