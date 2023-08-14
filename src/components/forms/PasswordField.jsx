import React from 'react';
import { getIn } from 'formik';
import propTypes from 'prop-types';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

PasswordField.propTypes = {
  formik: propTypes.object,
  label: propTypes.string,
  name: propTypes.string,

  placeholder: propTypes.string,
  className: propTypes.string,
  disabled: propTypes.bool,
  isRequiredLabel: propTypes.bool,
  onInput: propTypes.func,
  isDynamic: propTypes.bool
};

export default function PasswordField({
  formik,
  label,
  name,

  placeholder,
  className = '',
  disabled = false,
  isRequiredLabel,
  onInput,
  isDynamic = false,
  ...props
}) {
  const [showPassword, setShowPassword] = React.useState(false);
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
      <div className="relative">
        <input
          {...(formik && formik.getFieldProps(name))}
          type={showPassword ? 'text' : 'password'}
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

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-2">
          {showPassword ? (
            <AiFillEye
              className="cursor-pointer text-gray-500 hover:text-gray-700 w-5 h-5"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <AiFillEyeInvisible
              className="cursor-pointer text-gray-500 hover:text-gray-700 w-5 h-5"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      </div>
      <span className="text-red-600  text-xs">
        {isDynamic
          ? getIn(formik?.touched, name) && getIn(formik?.errors, name)
          : formik?.touched[name] && formik?.errors[name]}
      </span>
    </div>
  );
}
