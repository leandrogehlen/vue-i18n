<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ t("documentation") }}</template>

    <i18n-t keypath="officialDocContent" tag="div">
      <template #link>
        <a href="https://vuejs.org/" target="_blank" rel="noopener">
          {{ t("officialDoc") }}
        </a>
      </template>
    </i18n-t>
  </WelcomeItem>
</template>
