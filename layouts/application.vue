<template>
    <slot/>
  </template>
  <script setup>
  const { t, locale, setLocale } = useI18n()
  const localePath = useLocalePath()
  
  </script>