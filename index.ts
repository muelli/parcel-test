import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {Elm} from "./Main.elm";

const div = document.getElementById("main");
const app = Elm.Main.init({node: div});
