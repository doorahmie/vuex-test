<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'RenderTest'}">RenderTest</router-link> |
      <router-link :to="{ name: 'EventList' }">Events</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'EventCreate' }">Create Event</router-link> |
      <!-- <router-link :to="{name: 'TestComponent'}">Test Component</router-link> -->
      <router-link :to="{name: 'DiscordVue'}">Discord</router-link>
      <router-view />
    </div>
  </div>
</template>

<style>
  @import './App.css';
</style>