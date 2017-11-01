new Vue({
	el: "#demo",
	data: {
		search: "abc",
		num: 1000,
	},
	computed: {
		searched: function() {
			return "cba"
		},
		numed: function() {
			return '$' + this.num
		}
	}
})