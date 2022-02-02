import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Button } from "antd";
import { Formik, Form } from "formik";
import FormikField from "../../../shared/form/Field";
import FormikSelect from "../../../shared/form/FormikSelect";
import FileInputField from "../../../shared/form/FileInput";

const designationOptions = [
  {
    label: "Owner",
    value: "owner",
  },
  {
    label: "Principal",
    value: "principal",
  },
  {
    label: "Vice Principal",
    value: "vice-principal",
  },
];

const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

function PersonalDetailsForm({ form, setForm, changeStep }) {
  const initValues = {
    accountName: (form && form.accountName) || "",
    religion: (form && form.religion) || "",
    nationality: (form && form.nationality) || "",
    designation: (form && form.designation) || null,
    gender: (form && form.gender) || null,
    mobile: (form && form.mobile) || "",
    landline: (form && form.landline) || "",
    email: (form && form.email) || "",
    userPhoto: (form && form.userPhoto) || "",
  };

  return (
    <div className="py-3">
      <Formik
        initialValues={initValues}
        validationSchema={Yup.object({
          accountName: Yup.string().required("Account Name is required"),
          designation: Yup.string()
            .nullable()
            .required("Designation is required"),
          gender: Yup.string().nullable().required("Gender is required"),
          religion: Yup.string().required("Religion is required"),
          nationality: Yup.string().required("Nationality is required"),
          mobile: Yup.string().required("Mobile is required"),
          landline: Yup.string().required("Landline is required"),
          email: Yup.string()
            .email("Invalid Email")
            .required("Email is required"),
          userPhoto: Yup.object().required("Photo is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const newData = { ...form, ...values };
          setForm(newData);
          setSubmitting(false);
          changeStep(1); // For School Details Form
        }}
      >
        {({ values, touched, errors, setFieldValue, setFieldTouched }) => (
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
                    name="accountName"
                    type="text"
                    placeholder="Your Name"
                    value={values.accountName}
                    touched={touched.accountName}
                    error={errors.accountName}
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
              {/* Designation */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  Designation
                </span>
                <div className="flex w-2/3">
                  <FormikSelect
                    name="designation"
                    className="w-2/3"
                    placeholder="Select your designation"
                    itemOptions={designationOptions}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    value={values.designation}
                    touched={touched.designation}
                    error={errors.designation}
                  />
                </div>
              </div>
              {/* Gender */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">Gender</span>
                <div className="flex w-2/3">
                  <FormikSelect
                    name="gender"
                    className="w-2/3"
                    placeholder="Select Gender"
                    itemOptions={genderOptions}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    value={values.gender}
                    touched={touched.gender}
                    error={errors.gender}
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
              {/* User Photo */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">Photo</span>
                <div className="flex w-2/3">
                  <FileInputField
                    name="userPhoto"
                    placeholder="Upload your photo"
                    onChange={setFieldValue}
                    value={values.userPhoto}
                    touched={touched.userPhoto}
                    error={errors.userPhoto}
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:justify-center md:justify-start gap-3 mt-3">
              <Button
                type="primary"
                className="md:w-1/3 lg:w-1/4"
                htmlType="submit"
              >
                Next
              </Button>
              <Button className="md:w-1/3 lg:w-1/4" htmlType="reset">
                Reset
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

PersonalDetailsForm.propTypes = {
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
  changeStep: PropTypes.func.isRequired,
};

export default PersonalDetailsForm;
