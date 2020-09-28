export default {
    install(Vue, options) {

        Vue.material.setLocale = async function(localeArg, fallbackLocale) {

            function materialLocale(locale) {
                function localize(type, length, width) {
                    const fn = locale.localize[type]
                    return [...Array(length).keys()].map(i => fn(i, {width}))
                }

                return {
                    startYear: 1900,
                    endYear: 2099,

                    dateFormat: locale.formatLong.date({width: 'short'}),

                    days: localize('day', 7, 'wide'),
                    shortDays: localize('day', 7, 'abbreviated'),
                    shorterDays: localize('day', 7, 'short'),

                    months: localize('month', 12, 'wide'),
                    shortMonths: localize('month', 12, 'abbreviated'),
                    shorterMonths: localize('month', 12, 'narrow'),

                    firstDayOfAWeek: locale.options.weekStartsOn,

                    // TODO Localize button captions
                    cancel: 'Abbrechen',
                    confirm: 'OK',
                }
            }

            if (typeof localeArg === 'string') {
                // Set the most specific locale asynchronously
                for (let localeName = localeArg; ;) {
                    try {
                        const locale = (await import(`date-fns/locale/${localeName}/index.js`)).default
                        Vue.material.locale = materialLocale(locale)
                        return Promise.resolve(locale)

                    } catch (e) {
                        // Remove the least specific subtag
                        let subtags = localeName.match(/^(.+)-(.+)$/)
                        if (subtags) {
                            // Try a less specific locale
                            localeName = subtags[1]

                        } else {
                            // Use fallback locale if possible
                            break
                        }
                    }
                }

            } else if (localeArg) {
                // Set the specified locale synchronously
                Vue.material.locale = materialLocale(localeArg)
                return Promise.resolve(localeArg)
            }

            // Requested locale not found, try fallback locale
            if (fallbackLocale) {
                Vue.material.locale = materialLocale(fallbackLocale)
                return Promise.resolve(fallbackLocale)

            } else {
                return Promise.reject(`Locale '${localeArg}' not found and no fallback locale given`)
            }
        }
    }
}
