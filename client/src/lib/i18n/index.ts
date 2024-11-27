import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n-svelte5'

const defaultLocale = 'en'

register('en', () => import('./locales/en.json'))
register('ru', () => import('./locales/ru.json'))

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? getInitialLocale(window.navigator.language) : defaultLocale,

})

function getInitialLocale(lng: any) {
  console.log('init')
  if (lng.startsWith("ru")) return 'ru'
  else if (lng.startsWith("zh")) return 'zh'
  else return 'en'
}
