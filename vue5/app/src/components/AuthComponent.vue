<template>
	<div v-if="isAuth">
		<h2>Успешная регистрация</h2>
	</div>
	<div v-else>
		<h2>Необходимо зарегистрироваться!</h2>
		<form>
			<label>Name <input type="text" /></label>
			<label>Email <input type="email" /></label>
			<label>Password <input type="password" /></label>
			<button>Submit</button>
		</form>
	</div>
</template>

<script>
export default {
	props: {
		isAuth: Boolean,
	},
};
</script>

<style lang="scss" scoped></style>
