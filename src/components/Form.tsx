import { Formik, Field, ErrorMessage } from "formik";
import formSchema from "../utils/formSchema";
import errorIcon from "../assets/icon-error.svg";

export default function Form() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lasName: "",
        email: "",
        password: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div>
              <Field
                type="text"
                name="firstName"
                placeholder="First name"
                className={
                  !!errors.firstName && touched.firstName
                    ? "border-tw-red"
                    : null
                }
              />
              {!!errors.firstName && touched.firstName ? (
                <img src={errorIcon} alt="Error icon" />
              ) : null}
            </div>
            <span className="error_msg">
              <ErrorMessage name="firstName" />
            </span>
          </div>
          <div className="field">
            <div>
              <Field
                type="text"
                name="lasName"
                placeholder="Last name"
                className={
                  !!errors.lasName && touched.lasName ? "border-tw-red" : null
                }
              />
              {!!errors.lasName && touched.lasName ? (
                <img src={errorIcon} alt="Error icon" />
              ) : null}
            </div>
            <span className="error_msg">
              <ErrorMessage name="lasName" />
            </span>
          </div>
          <div className="field">
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email address"
                className={
                  !!errors.email && touched.email ? "border-tw-red" : null
                }
              />
              {!!errors.email && touched.email ? (
                <img src={errorIcon} alt="Error icon" />
              ) : null}
            </div>
            <span className="error_msg">
              <ErrorMessage name="email" />
            </span>
          </div>
          <div className="field">
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={
                  !!errors.password && touched.password ? "border-tw-red" : null
                }
              />
              {!!errors.password && touched.password ? (
                <img src={errorIcon} alt="Error icon" />
              ) : null}
            </div>
            <span className="error_msg">
              <ErrorMessage name="password" />
            </span>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Claim your free trial
          </button>
          <div className="text-tw-grayish-blue text-sm text-center">
            By clicking the button, you are agreeing to our{" "}
            <a href="#terms-and-services" className="text-tw-red font-bold">
              Terms and Services
            </a>
          </div>
        </form>
      )}
    </Formik>
  );
}
