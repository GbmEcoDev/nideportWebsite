<template>
    <div style="height:100vh; width:100vw">
      <LMap
        ref="map"
        :zoom="zoom"
        :center="[-27.3671, -55.8961]"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
        />
      </LMap>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const zoom = ref(12)
  </script>
  
  <style>
  body {
    margin: 0;
  }
  </style>