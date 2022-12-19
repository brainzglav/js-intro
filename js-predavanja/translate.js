/*
 function translate(key) {
  const locale = process.argv[2] || "en";
  const english = require("../i18n/en.json");
  const croatian = require("../i18n/hr.json");

  switch (locale) {
    case "en":
      return english[key];
    case "hr":
      return croatian[key];
    default:
      return english[key];
  }
}

function translate(key) {
  const locale = process.argv[2] || "en";
  const english = require("../i18n/en.json");
  const croatian = require("../i18n/hr.json");

  if (locale === "en") {
    return english[key];
  }

  if (locale === "hr") {
    return croatian[key];
  }

  return english[key];
}
 */

function translate(key) {
  const locale = process.argv[2] || "en";
  const TRANSLATION = {
    en: require("../i18n/en.json"),
    hr: require("../i18n/hr.json"),
  };
  const translation = TRANSLATION[locale] || TRANSLATION.en;

  return translation[key];
}

console.log("Doba dana je:", translate("jutro"));
console.log(translate("hello_world"));
console.log(translate("enumarated_type"));
