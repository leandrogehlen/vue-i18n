import { createApp } from "@vue-i18n-monorepo/core";

import { i18n } from "./i18n";

const app = createApp();
app.use(i18n);

app.mount("#app");
