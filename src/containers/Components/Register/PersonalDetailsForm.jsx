import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Button } from "antd";
import { Formik, Form } from "formik";
import FormikField from "../../../shared/form/Field";

function PersonalDetailsForm({ setForm, changeStep }) {
  const initValues = {
    username: "",
    designation: "",
    religion: "",
    nationality: "",
    mobile: "",
    landline: "",
    email: "",
  };
  return (
    <div className="py-3">
      <Formik
        initialValues={initValues}
        validationSchema={Yup.object({
          username: Yup.string().required("User Name is required"),
          designation: Yup.string().required("Designation is required"),
          religion: Yup.string().required("Religion is required"),
          nationality: Yup.string().required("Nationality is required"),
          mobile: Yup.string().required("Mobile is required"),
          landline: Yup.string().required("Landline is required"),
          email: Yup.string()
            .email("Invalid Email")
            .required("Email is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setForm(values);
          setSubmitting(false);
          changeStep(1); // For School Details Form
        }}
      >
        {({ values, touched, errors }) => (
          <Form className="grid md:grid-cols-2">
            {/* =========================== Left Form ========================== */}
            <div className="md:py-3">
              {/* Username */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  Account Name
                </span>
                <div className="flex w-2/3">
                  <FormikField
                    name="username"
                    type="text"
                    placeholder="Your Name"
                    value={values.username}
                    touched={touched.username}
                    error={errors.username}
                  />
                </div>
              </div>
              {/* Religion */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  Religion
                </span>
                <div className="flex w-2/3">
                  <FormikField
                    name="religion"
                    type="text"
                    placeholder="Religion"
                    value={values.religion}
                    touched={touched.religion}
                    error={errors.religion}
                  />
                </div>
              </div>
              {/* Nationality */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  Nationality
                </span>
                <div className="flex w-2/3">
                  <FormikField
                    name="nationality"
                    type="text"
                    placeholder="Nationality"
                    value={values.nationality}
                    touched={touched.nationality}
                    error={errors.nationality}
                  />
                </div>
              </div>
            </div>
            {/* ============================= Right Form ========================== */}
            <div className="md:py-3">
              {/* Mobile */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">Mobile</span>
                <div className="flex w-2/3">
                  <FormikField
                    name="mobile"
                    type="text"
                    placeholder="Mobile No."
                    value={values.mobile}
                    touched={touched.mobile}
                    error={errors.mobile}
                  />
                </div>
              </div>
              {/* Landline */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  Landline
                </span>
                <div className="flex w-2/3">
                  <FormikField
                    name="landline"
                    type="text"
                    placeholder="Landline No."
                    value={values.landline}
                    touched={touched.landline}
                    error={errors.landline}
                  />
                </div>
              </div>
              {/* Email */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">Email</span>
                <div className="flex w-2/3">
                  <FormikField
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    touched={touched.email}
                    error={errors.email}
                  />
                </div>
              </div>
            </div>
            <Button type="primary" className="w-1/3" htmlType="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

PersonalDetailsForm.propTypes = {
  setForm: PropTypes.func.isRequired,
  changeStep: PropTypes.func.isRequired,
};

export default PersonalDetailsForm;
