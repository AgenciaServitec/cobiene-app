import configs from "./configs.json";
import { includes } from "lodash";

const hostName = window.location.hostname;

const hostsProduction = ["cobiene.com", "cobiene.web.app"];

const currentEnvironment = includes(hostsProduction, hostName)
  ? "production"
  : "development";

const currentConfig = configs[currentEnvironment];

const common = configs.common;
const contactData = configs.common.contactData;

const { version, apiUrl, ipInfoApi } = currentConfig;

console.log(currentEnvironment, ":", version);

export { version, apiUrl, ipInfoApi, currentConfig, common, contactData };
