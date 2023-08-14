import React from 'react';
import { getIn } from 'formik';
import propTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';
import DOMPurify from 'dompurify';

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
  isDynamic: propTypes.bool,
  size: propTypes.string,
  wSize: propTypes.string
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
  size,
  wSize,
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
        className={`${className} 
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
          } rounded bg-transparent mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none px-3
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
