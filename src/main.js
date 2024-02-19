import { createApp } from "vue";

import App from "./App.vue";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faCloud, faPenFancy, faInfo } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faComment } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faPinterestP,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faLightbulb,
  faComment,
  faCloud,
  faPenFancy,
  faTwitter,
  faPinterestP,
  faFacebookF,
  faInfo
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
