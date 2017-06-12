<template lang="html">
	<article :class = "{ '_opened' : opened }"
		class="post">
		<h2 class="post__title">{{ title }}</h2>
		<h3 class="post__time">{{ time }}</h3>
		<div v-html = "content"
			class="post__content html ql-editor"
			></div>
	</article>
</template>

<script>
	export default {
  		name: "post",
		props: [ 'title' , 'time' , 'content' ],
		data() {
			return {
				opened: false
			}
		},
		methods: {
			open() {
				this.opened =! this.opened
			}
		}
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.post {
		display: flex;
		align-items: flex-start;
		flex-flow: row wrap;
		margin: 1rem 0;
		padding: 1.5rem 2rem;
		color: lighten($blacked , 5%) darken($whited , 2.5%);
		@include MDShadow-1;
		transition: .6s ease-in-out;
		@include MQ(Pp) {
			flex-flow: column nowrap;
			width: 100%;
			padding: 0;
		}
		.ql-align-center img {
			max-width: 90%;
		}
		&._opened {
			size: 100% auto
		}
		&__title {
			width: 50%;
			padding:12px 15px;
			font-size: 2.5rem;
			@include MQ(Pp) {
				width: 100%;
			}
		}
		&__time {
			width: 50%;
			text-align: right;
			@include MQ(Pp) {
				width: 100%;
				text-align: left;
				padding: 0 15px;
			}
		}
		&__content {
			width: 100%;
		}
	}

</style>
