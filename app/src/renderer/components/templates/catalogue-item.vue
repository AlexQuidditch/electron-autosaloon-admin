<template lang="html">
	<li v-once class="tab-auto__list-item">
		<h6	class="tab-auto__list-item-title">{{ model }}</h6>
		<img :src="image"
			:alt="model"
			class="tab-auto__list-item-image"
		/>
		<p class="tab-auto__list-item-description">{{ description }}</p>
		<div class="tab-auto__list-item-footer">
			<span class="tab-auto__list-item-price">от {{ price }} руб.</span>
			<router-link
				:to="{ name: route }"
				class="tab-auto__list-item-link waves-effect waves-light"
				>Подробнее</router-link>
		</div>
	</li>
</template>

<script>
	export default {
  		name: "catalogue-item",
		props: [ 'model' , 'image' , 'description' , 'price' , 'route' ]
	}
</script>
