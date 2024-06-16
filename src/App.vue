<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'EventList' }">Events</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'EventCreate' }">Create Event</router-link> |
      <!-- <router-link :to="{name: 'TestComponent'}">Test Component</router-link> -->
      <router-link :to="{name: 'DiscordVue'}">Discord</router-link> |
      <router-link :to="{name: 'HookTest'}">HookTest</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  @import './App.css';
</style>