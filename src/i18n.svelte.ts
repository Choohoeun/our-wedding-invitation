import { getLocaleFromQueryString, init, isLoading, locale, register } from 'svelte-i18n';

register('kr', () => import('./locales/kr.json'));
register('en', () => import('./locales/en.json'));

const resolvedInitial = getLocaleFromQueryString('lang') || 'kr';

init({
	fallbackLocale: 'kr',
	initialLocale: resolvedInitial
});

// Ensure locale is set synchronously to avoid "Cannot format" errors
locale.set(resolvedInitial);

class LocaleStore {
	isLoading = $state(true);
	locale: string | undefined | null = $state(undefined);
	isKr = $derived(this.locale === 'kr');
	isEn = $derived(this.locale === 'en');

	constructor() {
		isLoading.subscribe((isLoading) => {
			this.isLoading = isLoading;
		});

		locale.subscribe((locale) => {
			if (locale && !['kr', 'en'].includes(locale)) {
				this.locale = 'kr';
			} else {
				this.locale = locale;
			}
		});
	}
}

export const localeStore = new LocaleStore();
