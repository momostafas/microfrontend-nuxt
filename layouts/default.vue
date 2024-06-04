<template>
    <div>
      <header>
        <h1>My Nuxt.js App</h1>
      </header>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/microfrontend-1">Microfrontend 1</nuxt-link>
        micro one
        <microfrontend-1 />
        <nuxt-link to="/microfrontend-2">Microfrontend 2</nuxt-link>
      </nav>
      <main>
        <nuxt />
        <!-- Placeholder for Microfrontend 2 -->
        <div id="single-spa-application:microfrontend-2"></div>
      </main>
      <footer>
        <p>&copy; 2023 My Nuxt.js App</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Trigger Single-SPA's rerouting logic to ensure microfrontends are mounted
      window.dispatchEvent(new Event('single-spa:routing-event'));
    }
  };
  </script>
  
  <style>
  /* Add some basic styling */
  nav {
    margin: 1em 0;
  }
  nav a {
    margin-right: 1em;
  }
  </style>
  