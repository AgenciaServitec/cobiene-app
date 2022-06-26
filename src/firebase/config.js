import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import configs from "./configs.json";
import { includes } from "lodash";

const hostName = window.location.hostname;

const hostsProduction = ["gamontllanta.com", "gamontllanta.web.app"];

const currentEnvironment = includes(hostsProduction, hostName)
  ? "production"
  : "development";

const currentConfig = configs[currentEnvironment];

const common = configs.common;
const contactData = configs.common.contactData;

const { firebaseApp, version, apiUrl, ipInfoApi } = currentConfig;

console.log(currentEnvironment, ":", version);

firebase.initializeApp(firebaseApp);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

firestore.enablePersistence().then(() => console.log("Persistence enabled"));

const buckets = {
  default: storage,
};

Object.keys(currentConfig.buckets).forEach((bucketKey) => {
  buckets[bucketKey] = firebase.app().storage(currentConfig.buckets[bucketKey]);
});

let pageLoaded = false;

firestore.doc("settings/default").onSnapshot(() => {
  pageLoaded && document.location.reload(true);
  pageLoaded = true;
});

const imageResizes = ["400x500", "1400x600"];

export {
  firebase,
  firestore,
  auth,
  storage,
  buckets,
  version,
  apiUrl,
  ipInfoApi,
  currentConfig,
  imageResizes,
  common,
  contactData,
};
