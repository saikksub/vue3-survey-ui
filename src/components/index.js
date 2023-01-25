import QCard from "./QCard.vue";
import "../assets/styles.scss";

const Vue3SurveyUI = {
  install(app, options) {
    // Register a global component
    app.component("q-card", QCard);
  },
};

export default Vue3SurveyUI;
