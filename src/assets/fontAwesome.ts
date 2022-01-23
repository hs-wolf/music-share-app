import { App } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faGlobeAmericas,
  faBars,
  faUserCircle,
  faClipboardList,
  faCode,
  faEnvelopeOpenText,
  faFireAlt,
  faWind,
  faFileCode,
  faHandshake,
  faComments,
  faStopwatch,
  faExternalLinkSquareAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faJsSquare,
  faNodeJs,
  faVuejs,
  faGitAlt,
  faEnvira,
  faHtml5,
  faCss3Alt,
  faSass,
  faTrello,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  install(app: App) {
    library.add(
      faSun,
      faMoon,
      faGlobeAmericas,
      faBars,
      faUserCircle,
      faClipboardList,
      faCode,
      faEnvelopeOpenText,
      faFireAlt,
      faWind,
      faFileCode,
      faHandshake,
      faComments,
      faStopwatch,
      faExternalLinkSquareAlt,
      faTimes
    );
    library.add(
      faGithub,
      faLinkedin,
      faJsSquare,
      faNodeJs,
      faVuejs,
      faGitAlt,
      faEnvira,
      faHtml5,
      faCss3Alt,
      faSass,
      faTrello,
      faDiscord
    );
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};
