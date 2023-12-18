<template>
    <h2 :class="`${spanClassTxt} ${sClass} ${cClass}`" class=" dark:text-white font-bold">
        {{ texte }}
    </h2>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
//const { texte } = defineProps<{texte:string}>()


const { texte, alignTxt, sizeTxt = "", colorTxt = ""  } = defineProps<{
    texte:string;
    alignTxt: "left" | "center" | "right";
    colorTxt: "primary" | "secondary" | "white";
    sizeTxt?: string;
    
}>();

let spanClassTxt: string = "";
let cClass: string = "";
let sClass: string = "text-2xl  md:text-3xl";
if (alignTxt === "left") {
    spanClassTxt = "text-left max-sm:text-center";
} else if (alignTxt === "center") {
    spanClassTxt = "text-center";
} else if (alignTxt === "right") {
    spanClassTxt = "text-right";
}
if (sizeTxt != "")
{
    sClass= sizeTxt;
}

if (colorTxt === "primary") {
    cClass = "text-primary";
} else if (colorTxt === "secondary") {
    cClass = "text-secondary";
} else if (colorTxt === "white") {
    cClass = "text-white";
}
</script>
<style scoped>
</style>