import * as yup from "yup";

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const formSchema = yup.object({
  firstName: yup.string().required("First name cannot be empty"),
  lasName: yup.string().required("Last name cannot be empty"),
  email: yup
    .string()
    .matches(emailRegEx, "Looks like this is not an email")
    .email()
    .required("Email address cannot be empty"),
  password: yup
    .string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password cannot be more than 32 characters")
    .required("Password cannot be empty"),
});

export default formSchema;
