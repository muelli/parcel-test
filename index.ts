import '@babel/polyfill';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

//import 'es6-promise/auto';
import * as libsodium from "libsodium-wrappers";
import * as naclutil from "tweetnacl-util";

export function sodium_init() {
    return libsodium.ready;
}

export const utf8enc = naclutil.encodeUTF8;
export const utf8dec = naclutil.decodeUTF8;

import {Elm} from "./Main";

const should_break = document.getElementByIdd("main");
const should_break_too = document.getElementById(42);
const div = document.getElementById("main");
const app = Elm.Main.init({node: div});
