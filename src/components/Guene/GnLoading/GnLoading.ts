import type { App } from 'vue'; // Import 'App' as a type

const MyPlugin = {
    install(app: App, options: { message: string }) {
        app.config.globalProperties.$myPlugin = {
            message: options.message || "Hello from My Plugin!",
        };
    },
};

export default MyPlugin;