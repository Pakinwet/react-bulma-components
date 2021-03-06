import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import CONSTANTS from '../../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Input = ({
  className,
  type,
  size,
  color,
  readOnly,
  isStatic,
  disabled,
  placeholder,
  value,
  name,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <input
      {...props}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      readOnly={readOnly || isStatic}
      disabled={disabled}
      className={classnames('input', modifiers.classnames(allProps), className, {
        'is-static': isStatic,
        [`is-${size}`]: size,
        [`is-${color}`]: color,
      })}
    />
  );
};

Input.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  type: PropTypes.oneOf(['text', 'email', 'tel', 'password', 'number', 'search']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  isStatic: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
};

Input.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  value: '',
  style: {},
  type: 'text',
  size: null,
  color: null,
  readOnly: false,
  isStatic: false,
  disabled: false,
  placeholder: '',
  name: null,
};

export default Input;
