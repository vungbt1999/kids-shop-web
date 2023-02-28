const defaultLocale = process.env.NEXT_PUBLIC_LOCALE_DEFAULT || "vi";
const reloadOnPrerender = process.env.ENVIRONMENT === "development";
const locales = [defaultLocale];

module.exports = {
  i18n: {
    locales,
    defaultLocale,
    reloadOnPrerender
  },
};
