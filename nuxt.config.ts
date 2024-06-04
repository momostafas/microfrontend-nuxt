import { registerMicrofrontends } from './single-spa.config'; // Import here

export default defineNuxtConfig({
    // ... other Nuxt 3 configuration options
    buildModules: [
        // ... other build modules
        '@nuxtjs/tailwindcss',
    ],
    css: [
        // ... other CSS imports
        '~/assets/styles.css',
    ],
    router: {
        middleware: ['single-spa'], // Add the 'single-spa' middleware
    },
});

// Call registerMicrofrontends after the Nuxt configuration is defined
registerMicrofrontends(); // Call here