import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import axios from "axios";

createApp(App).mount("#app");

axios({
  url: "http://www.jd.com",
}).then((res) => {
  console.log(res);
});
