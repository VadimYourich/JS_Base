<template>
	<div>
		<h2>{{ user.name }}</h2>
		<h2>{{ user.surname }}</h2>
		<h3>{{ user.email }}</h3>
	</div>
</template>

<script>
export default {
	props: {
		user: Object,
	},
};
</script>

<style lang="scss" scoped>
div {
	width: 300px;
	height: 300px;
	border: 1px solid #000;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
</style>
