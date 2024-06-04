import { createApp, h } from 'vue'; // Import createApp and h (createVNode)
import singleSpaVue from 'single-spa-vue';

export const registerApplication = (name, rootComponent, activeWhen, customProps = {}) => {
    return singleSpaVue({
        // Use createApp (Vue 3) or Vue (Vue 2) based on your project's Vue version
        createApp, // For Vue 3
        // Vue, // For Vue 2 (if applicable)

        // Required appOptions with el and render properties
        appOptions: {
            el: '#single-spa-application:' + name,
            render: () => h(rootComponent),
        },

        // ... other options
        handleInstance: (app) => {
            app.config.globalProperties.customProps = customProps;
        },
        displayName: name,
        activeWhen,
        customProps,
    });
};

export const registerMicrofrontends = () => {
    registerApplication('microfrontend-1', () => import('./microfrontends/Microfrontend1.vue'), '/microfrontend-1');
    registerApplication('microfrontend-2', () => import('./microfrontends/Microfrontend2.vue'), '/microfrontend-2');
};
