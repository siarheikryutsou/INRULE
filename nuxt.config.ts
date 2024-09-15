// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    srcDir: "src",
    components: [
        "~/components"
    ],

    css: ["~/assets/css/main.css"],

    postcss: {
        plugins: {
            "postcss-import": {},
            "tailwindcss/nesting": {},
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    modules: [
        "nuxt-icons",
        ["@nuxtjs/google-fonts", {
            families: {
                Roboto: [400, 500, 600, 700],
                download: true,
                inject: true
            }
        }],
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            title: "InRule - AI Decisioning Software",
            link: [
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.svg" },
            ]
        }
    }
})
