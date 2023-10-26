<template>
	<div>
		<form>
			<input v-model.number="credit" type="number" placeholder="Сумма кредита" />
			<input v-model.number="percent" type="number" placeholder="Процентная ставка" />
			<input v-model.number="period" type="number" placeholder="Срок кредита" />
		</form>
		<h2>Ежемесячный платёж - {{ payment.payByMonth }}</h2>
		<h2>Общая сумма кредита - {{ payment.total }}</h2>
	</div>
</template>

<script>
export default {
	data() {
		return {
			credit: null,
			percent: null,
			period: null,
		};
	},
	computed: {
		payment() {
			const principal = parseFloat(this.credit);
			const interestRate = parseFloat(this.percent) / 100 / 12;
			const loanTermMonths = parseFloat(this.period) * 12;

			const numerator = principal * interestRate * Math.pow(1 + interestRate, loanTermMonths);
			const denominator = Math.pow(1 + interestRate, loanTermMonths) - 1;

			const payByMonth = (numerator / denominator).toFixed(2);
			const total = (payByMonth * 12 * this.period).toFixed(2);
			return { payByMonth, total };
		},
	},
};
</script>

<style lang="scss" scoped></style>
