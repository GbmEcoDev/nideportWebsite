<template>
     <span v-if="$colorMode.value === 'light'">
        <img src="/images/logo-nideport.svg" alt="Nideport" class="py-0">
    </span>
    <span v-if="$colorMode.value === 'dark'">
        <img src="/images/logo-nideport-dark.svg" alt="Nideport">
    </span>
</template>
<style scope>
img {
    width:185px;
}
</style>