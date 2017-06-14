<template lang="html">
	<section id="video" class="video">
		<p class="notation">
			На этой странице Вы можете добавить или удалить видео на страницах автомобилей. <br />
			Обратите внимание на то, как должны выглядеть ссылки: <br />
			Полный вид: https://www.youtube.com/watch?v=<b>vkH1U8yHL2g</b> <br />
			Вид, принимаемый программой: <b>vkH1U8yHL2g</b> <br />
			<b>Программа принимает только видео с YouTube!</b>
		</p>
		<div class="container _flex-row _j-center">
			<button @click="saveVideos()"
				class="save-change waves-effect waves-light"
				type="button"
				>Сохранить списки видео</button>
		</div>
		<ul class="video-list container _flex-row _j-around _a-start">
			<video-item v-for="videoItem in Videos" :key="videoItem.title" :Item="videoItem" ></video-item>
		</ul>
	</section>
</template>

<script>

	import videoItem from './templates/video-item.vue';

	export default {
		name: "video",
		components: { videoItem	},
		computed: {
			Videos() {
				return this.$state.content.Videos
			}
		},
		methods: {
			saveVideos() {
				this.$store.dispatch( 'saveVideos' , this.Videos );
			}
		}
	}

</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.notation {
		width: 80%;
		margin: 0 auto;
		padding: 16px;
		@include MDShadow-1;
	}

	.save-change {
		@include MDButton( $white , $green ) {
			height: 3rem;
			padding: 0 1rem;
			margin-top: 16px;
		};
	}

</style>
