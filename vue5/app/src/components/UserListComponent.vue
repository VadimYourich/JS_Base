<template>
	<div><UserComponent v-for="user in users" :key="user.id" :user="user" /></div>
</template>

<script>
import UserComponent from './UserComponent.vue';

export default {
	components: { UserComponent },
	data() {
		return {
			users: [
				{
					id: 1,
					name: 'Bob',
					surname: 'Marley',
					email: 'bobmarley@bob.com',
				},
				{
					id: 2,
					name: 'Walt',
					surname: 'Disney',
					email: 'disney@wb.com',
				},
				{
					id: 3,
					name: 'Tom',
					surname: 'Cruse',
					email: 'tom@cruse.com',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
div {
	display: flex;
	gap: 20px;
}
</style>
