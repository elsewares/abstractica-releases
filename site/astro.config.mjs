// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = 'https://github.com/elsewares/abstractica-releases';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.abstractica.io',
	integrations: [
		starlight({
			title: 'Abstractica',
			description:
				'Documentation for Abstractica, the editor-centric notebook for solo and journaling tabletop RPG players.',
			logo: { src: './src/assets/logo.svg', alt: '' },
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'GitHub', href: repo }],
			editLink: { baseUrl: `${repo}/edit/main/site/` },
			lastUpdated: true,
			customCss: [
				'@fontsource/raleway/400.css',
				'@fontsource/raleway/500.css',
				'@fontsource/raleway/600.css',
				'@fontsource/geist-mono/400.css',
				'@fontsource/grenze-gotisch/400.css',
				'./src/styles/theme.css',
			],
			sidebar: [
				{ label: 'Getting started', items: [{ autogenerate: { directory: 'getting-started' } }] },
				{ label: 'User guide', items: [{ autogenerate: { directory: 'guide' } }] },
				{ label: 'Game systems', items: [{ autogenerate: { directory: 'systems' } }] },
				{ label: 'Data format reference', items: [{ autogenerate: { directory: 'data' } }] },
				{ label: 'System authoring guide', items: [{ autogenerate: { directory: 'authoring' } }] },
				{ label: 'Help', items: [{ autogenerate: { directory: 'help' } }] },
				{ label: 'Release notes', slug: 'release-notes' },
				{
					label: 'Legal',
					items: [
						{ label: 'EULA', link: `${repo}/blob/main/EULA.md` },
						{ label: 'Privacy policy', link: `${repo}/blob/main/PRIVACY.md` },
					],
				},
			],
		}),
	],
});
