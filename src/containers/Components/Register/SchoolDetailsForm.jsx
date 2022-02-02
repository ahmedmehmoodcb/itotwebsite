import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Button } from "antd";
import { Formik, Form } from "formik";
import FormikField from "../../../shared/form/Field";
import FormikSelect from "../../../shared/form/FormikSelect";
import FileInputField from "../../../shared/form/FileInput";

const schoolTypeOptions = [
  {
    label: "Boys",
    value: "boys",
  },
  {
    label: "Girls",
    value: "girls",
  },
  {
    label: "Co Education",
    value: "co-education",
  },
];

const schoolLevelOptions = [
  {
    label: "Pre Primary",
    value: "pre-primary",
  },
  {
    label: "Primary",
    value: "primary",
  },
  {
    label: "Middle",
    value: "middle",
  },
  {
    label: "High",
    value: "high",
  },
];

const playAreaOptions = [
  {
    label: "Yes",
    value: "yes",
  },
  {
    label: "No",
    value: "no",
  },
];

const propertyStatusOptions = [
  {
    label: "Owned",
    value: "owned",
  },
  {
    label: "Rented",
    value: "rented",
  },
];

function SchoolDetailsForm({ form, setForm, changeStep }) {
  const initValues = {
    schoolName: (form && form.schoolName) || "",
    webAddress: (form && form.webAddress) || "",
    schoolType: (form && form.schoolType) || null,
    schoolLevel: (form && form.schoolLevel) || null,
    playArea: (form && form.playArea) || null,
    propertyStatus: (form && form.propertyStatus) || null,
    schoolArea: (form && form.schoolArea) || "",
    noOfStudents: (form && form.noOfStudents) || "",
    monthlyFee: (form && form.monthlyFee) || "",
    mailingAddress: (form && form.mailingAddress) || "",
    schoolPhoto: (form && form.schoolPhoto) || null,
  };

  return (
    <div className="py-3">
      <Formik
        initialValues={initValues}
        validationSchema={Yup.object({
          schoolName: Yup.string().required("School Name is required"),
          webAddress: Yup.string().required("Web Address is required"),
          schoolType: Yup.string()
            .nullable()
            .required("School Type is required"),
          schoolLevel: Yup.string()
            .nullable()
            .required("School Level is required"),
          playArea: Yup.string().nullable().required("Play Area is required"),
          propertyStatus: Yup.string()
            .nullable()
            .required("Property Status is required"),
          schoolArea: Yup.string().required("School Area is required"),
          noOfStudents: Yup.string().required("Students count is required"),
          monthlyFee: Yup.string().required("Monthly Fee is required"),
          mailingAddress: Yup.string().required("Mailing Address is required"),
          schoolPhoto: Yup.object()
            .nullable()
            .required("School Photo is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const newData = { ...form, ...values };
          setForm(newData);
          setSubmitting(false);
          changeStep(2); // For Class Record Form
        }}
      >
        {({ values, touched, errors, setFieldValue, setFieldTouched }) => (
          <Form className="grid md:grid-cols-2">
            {/* =========================== Left Form ========================== */}
            <div className="md:py-3">
              {/* School Name */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  School Name
                </span>
                <div className="flex w-2/3">
                  <FormikField
                    name="schoolName"
                    type="text"
                    placeholder="School Name"
                    value={values.schoolName}
                    touched={touched.schoolName}
                    error={errors.schoolName}
                  />
                </div>
              </div>
              {/* Web Address */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  Web Address
                </span>
                <div className="flex w-2/3">
                  <FormikField
                    name="webAddress"
                    type="text"
                    placeholder="Web Address"
                    value={values.webAddress}
                    touched={touched.webAddress}
                    error={errors.webAddress}
                  />
                </div>
              </div>
              {/* School Type */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  School Type
                </span>
                <div className="flex w-2/3">
                  <FormikSelect
                    name="schoolType"
                    className="w-2/3"
                    placeholder="Select your School Type"
                    itemOptions={schoolTypeOptions}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    value={values.schoolType}
                    touched={touched.schoolType}
                    error={errors.schoolType}
                  />
                </div>
              </div>
              {/* School Level */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  School Level
                </span>
                <div className="flex w-2/3">
                  <FormikSelect
                    name="schoolLevel"
                    className="w-2/3"
                    placeholder="Select School Level"
                    itemOptions={schoolLevelOptions}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    value={values.schoolLevel}
                    touched={touched.schoolLevel}
                    error={errors.schoolLevel}
                  />
                </div>
              </div>
              {/* Play Area */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  Play Area
                </span>
                <div className="flex w-2/3">
                  <FormikSelect
                    name="playArea"
                    className="w-2/3"
                    placeholder="Select Play Area"
                    itemOptions={playAreaOptions}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    value={values.playArea}
                    touched={touched.playArea}
                    error={errors.playArea}
                  />
                </div>
              </div>
              {/* Property Status */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  Property Status
                </span>
                <div className="flex w-2/3">
                  <FormikSelect
                    name="propertyStatus"
                    className="w-2/3"
                    placeholder="Select Property Status"
                    itemOptions={propertyStatusOptions}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    value={values.propertyStatus}
                    touched={touched.propertyStatus}
                    error={errors.propertyStatus}
                  />
                </div>
              </div>
            </div>
            {/* ============================= Right Form ========================== */}
            <div className="md:py-3">
              {/* School Area */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  School Area
                </span>
                <div className="flex w-2/3">
                  <FormikField
                    name="schoolArea"
                    type="text"
                    placeholder="School Area"
                    value={values.schoolArea}
                    touched={touched.schoolArea}
                    error={errors.schoolArea}
                  />
                </div>
              </div>
              {/* No. of Students */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  No. of Students
                </span>
                <div className="flex w-2/3">
                  <FormikField
                    name="noOfStudents"
                    type="text"
                    placeholder="No. Of Students"
                    value={values.noOfStudents}
                    touched={touched.noOfStudents}
                    error={errors.noOfStudents}
                  />
                </div>
              </div>
              {/* Monthly Fee */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  Monthly Fee
                </span>
                <div className="flex w-2/3">
                  <FormikField
                    name="monthlyFee"
                    type="text"
                    placeholder="Monthly Fee"
                    value={values.monthlyFee}
                    touched={touched.monthlyFee}
                    error={errors.monthlyFee}
                  />
                </div>
              </div>
              {/* Mailing Address */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  Mailing Address
                </span>
                <div className="flex w-2/3">
                  <FormikField
                    name="mailingAddress"
                    type="text"
                    textArea
                    placeholder="Mailing Address"
                    value={values.mailingAddress}
                    touched={touched.mailingAddress}
                    error={errors.mailingAddress}
                  />
                </div>
              </div>
              {/* School Photo */}
              <div className="flex gap-2 py-3">
                <span className="flex items-center required w-1/3">
                  School Photo
                </span>
                <div className="flex w-2/3">
                  <FileInputField
                    name="schoolPhoto"
                    placeholder="Upload school photo"
                    onChange={setFieldValue}
                    value={values.schoolPhoto}
                    touched={touched.schoolPhoto}
                    error={errors.schoolPhoto}
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:justify-center md:justify-start gap-3 mt-3">
              <Button
                className="md:w-1/3 lg:w-1/4"
                onClick={() => changeStep(0)}
              >
                Previous
              </Button>
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

SchoolDetailsForm.propTypes = {
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
  changeStep: PropTypes.func.isRequired,
};

export default SchoolDetailsForm;
