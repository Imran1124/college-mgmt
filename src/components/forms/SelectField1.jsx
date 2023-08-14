import React from 'react';
import { getIn } from 'formik';
import propTypes from 'prop-types';

SelectField.propTypes = {
  formik: propTypes.object,
  label: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.string,
  disabled: propTypes.bool,
  isRequiredLabel: propTypes.bool,
  selectedText: propTypes.string,
  children: propTypes.node,
  isDynamic: propTypes.bool,
  size: propTypes.string,
  wSize: propTypes.string,
  isBlankSelect: propTypes.bool
};

export default function SelectField({
  formik,
  label,
  name,
  placeholder,
  className = '',
  disabled = false,
  isRequiredLabel,
  children,
  selectedText,
  size,
  isDynamic,
  wSize,
  isBlankSelect = false,
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
      <select
        name={name}
        value={formik?.values[name]}
        onChange={(e) => {
          formik?.setFieldValue(name, e.target.value);
          formik?.setFieldValue(
            selectedText,
            e.target.options[e.target.selectedIndex].text === 'Select'
              ? ''
              : e.target.options[e.target.selectedIndex].text
          );
          return formik?.handleChange(e);
        }}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
        className={`${className} px-4 
        ${
          wSize === 'xs'
            ? 'w-[150px]'
            : wSize === 'sm'
            ? 'w-1/4'
            : wSize === 'md'
            ? 'w-1/2'
            : wSize === 'lg'
            ? 'w-3/4'
            : wSize === 'xl'
            ? 'w-full'
            : 'w-full'
        }
          ${
            size === 'sm'
              ? 'py-2'
              : size === 'lg'
              ? 'py-4'
              : size === 'xs'
              ? 'py-1'
              : size === 'xxs'
              ? 'py-0.5'
              : 'py-3'
          }
         rounded bg-transparent mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none 
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
      >
        {!isBlankSelect && <option value="">Select</option>}

        {children}
      </select>
      <span className="text-red-600 text-xs">
        {isDynamic
          ? getIn(formik?.touched, name) && getIn(formik?.errors, name)
          : formik?.touched[name] && formik?.errors[name]
          ? formik?.errors[name]
          : null}
      </span>
    </div>
  );
}
