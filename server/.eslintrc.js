module.exports = {
	env: {
		browser: false,
		es2021: true,
		node: true,
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		indent: ["warn", "tab"],
		"linebreak-style": ["warn", "windows"],
		quotes: ["warn", "double"],
		semi: ["warn", "never"],
	},
}
