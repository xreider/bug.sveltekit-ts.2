import { browser } from '$app/environment'
import '$lib/i18n' // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n-svelte5'

export const ssr = false;

export const load = async () => {
  console.log('layout load')
	if (browser) {
		locale.set(window.navigator.language)
	}
	await waitLocale()
}
