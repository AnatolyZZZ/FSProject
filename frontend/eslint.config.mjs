import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
	{languageOptions: { globals: globals.browser }},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{rules: {
		'indent': ["warn", 'tab'],
		'react/react-in-jsx-scope' : 'off',
		'@typescript-eslint/no-require-imports': 'off'
	}},
	{settings: {react: {version: "detect"}}},
	{ 
		files: ["*.config.js", "*.config.cjs", "scripts/**/*.js"],
		languageOptions: { globals: globals.node }
	}
]; 