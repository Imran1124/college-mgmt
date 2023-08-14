import React from 'react';
import { getIn } from 'formik';
import propTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';

InputField.propTypes = {
  formik: propTypes.object,
  label: propTypes.string,
  name: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.string,
  disabled: propTypes.bool,
  isRequiredLabel: propTypes.bool,
  onInput: propTypes.func,
  isDynamic: propTypes.bool
};

export default function InputField({
  formik,
  label,
  name,
  type = 'text',
  placeholder,
  className = '',
  disabled = false,
  isRequiredLabel,
  onInput,
  isDynamic = false,
  ...props
}) {
  return (
    <div>
      <label className="block text-gray-700">
        {label}{' '}
        {isRequiredLabel && (
          <small className="mt-1 text-sm font-semibold text-red-600 inline ">
            *
          </small>
        )}
      </label>

      <input
        {...(formik && formik.getFieldProps(name))}
        type={type}
        {...(onInput && { onInput })}
        placeholder={placeholder}
        disabled={disabled}
        className={`${className} w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none 
          ${
            isDynamic
              ? getIn(formik?.touched, name) && getIn(formik?.errors, name)
                ? 'border-red-600'
                : 'border-gray-300'
              : formik?.touched[name] && formik?.errors[name]
              ? 'border-red-600'
              : 'border-gray-300'
          }
         `}
        {...props}
      />
      <span className="text-red-600  text-xs">
        {isDynamic
          ? getIn(formik?.touched, name) && getIn(formik?.errors, name)
          : formik?.touched[name] && formik?.errors[name]}
      </span>
    </div>
  );
}
