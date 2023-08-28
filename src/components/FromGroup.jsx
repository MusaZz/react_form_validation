import React from "react";

const styles = {
  formGroup: "flex flex-col mb-2",
  formGroupLabel: "mb-2",
  formGroupInput:
    "border border-gray-600 rounded-lg px-2 py-1 text-sm focus:outline-none placeholder:text-gray-500",
  formGroupError: "mt-2 text-sm text-red-500",
};

const FromGroup = (props) => {
  return (
    <div className={styles.formGroup}>
      <label
        htmlFor={props.labelFor}
        className={`${styles.formGroupLabel} ${
          props.error ? "text-red-500" : ""
        }`}
      >
        {props.label}
      </label>
      <input
        ref={props.reference}
        type={props.type}
        id={props.id}
        className={`${styles.formGroupInput} ${
          props.error ? "border-red-500" : ""
        }`}
        placeholder={props.placeholder}
      />
      {props.error && (
        <p className={styles.formGroupError}>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default FromGroup;
