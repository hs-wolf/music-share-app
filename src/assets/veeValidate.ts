import { App } from "vue";
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

export default {
  install(app: App) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("passwords_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);

    configure({
      generateMessage: localize({
        en: {
          messages: {
            required: "This field is required.",
            min: "The {field} must be at least 0:{min} characters long.",
            max: "The {field} can't be longer than 0:{max} characters.",
            alpha_spaces: `The field {field} may only contain alphabetical characters and spaces.`,
            email: "The {field} must have a valid format.",
            min_value: `The field {field} is too low.`,
            max_value: `The field {field} is too high.`,
            excluded: `You are not allowed to use this value for the field {field}.`,
            country_excluded:
              "Due to restrictions, we do not accept users from this location.",
            passwords_mismatch: "The passwords don't match.",
            tos: "You must accept the Terms of Service.",
          },
          names: {
            name: "Name",
            email: "E-mail",
            message: "Message",
          },
        },
      }),
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
