import React, { Component, CSSProperties, ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowEqual from 'lodash/isEqual';
import Checkbox from './Checkbox';
import ConfigContext, { ConfigContextValue } from '../config-provider/ConfigContext';
import { CheckboxContextProvider } from './CheckboxContext';

export type CheckboxValueType = string | number;

export interface CheckboxOptionType {
  label: ReactNode;
  value: CheckboxValueType;
  disabled?: boolean;
}

export interface AbstractCheckboxGroupProps {
  prefixCls?: string;
  className?: string;
  options?: Array<CheckboxOptionType | string>;
  disabled?: boolean;
  style?: CSSProperties;
}

export interface CheckboxGroupProps extends AbstractCheckboxGroupProps {
  defaultValue?: Array<CheckboxValueType>;
  value?: Array<CheckboxValueType>;
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
  label?: string;
}

export interface CheckboxGroupState {
  value: any;
}

export interface CheckboxGroupContext {
  checkboxGroup?: {
    toggleOption: (option: CheckboxOptionType) => void;
    value: any;
    disabled?: boolean;
  };

  getPrefixCls(suffixCls: string, customizePrefixCls?: string): string;
}

export default class CheckboxGroup extends Component<CheckboxGroupProps, CheckboxGroupState> {
  static displayName = 'CheckboxGroup';

  static get contextType() {
    return ConfigContext;
  }

  static defaultProps = {
    options: [],
  };

  static propTypes = {
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    options: PropTypes.array,
    onChange: PropTypes.func,
  };

  context: ConfigContextValue;

  constructor(props: CheckboxGroupProps, context: ConfigContextValue) {
    super(props, context);
    this.state = {
      value: props.value || props.defaultValue || [],
    };
  }

  getContextValue() {
    const { disabled } = this.props;
    const { value } = this.state;
    return {
      checkboxGroup: {
        toggleOption: this.toggleOption,
        value,
        disabled,
      },
    };
  }

  componentWillReceiveProps(nextProps: CheckboxGroupProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value || [],
      });
    }
  }

  shouldComponentUpdate(nextProps: CheckboxGroupProps, nextState: CheckboxGroupState, nextContext: ConfigContextValue) {
    const { context } = this;
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || context.getPrefixCls !== nextContext.getPrefixCls;
  }

  getOptions() {
    const { options } = this.props;
    // https://github.com/Microsoft/TypeScript/issues/7960
    return (options as Array<CheckboxOptionType>).map(option => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        } as CheckboxOptionType;
      }
      return option;
    });
  }

  toggleOption = (option: CheckboxOptionType) => {
    const { state } = this;
    const optionIndex = state.value.indexOf(option.value);
    const value = [...state.value];
    if (optionIndex === -1) {
      value.push(option.value);
    } else {
      value.splice(optionIndex, 1);
    }
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  render() {
    const { props, state } = this;
    const { prefixCls: customizePrefixCls, className, style, options } = props;
    const { getPrefixCls } = this.context;
    const prefixCls = getPrefixCls('checkbox-group', customizePrefixCls);
    let children = props.children;
    if (options && options.length > 0) {
      children = this.getOptions().map(option => (
        <Checkbox
          key={option.value}
          disabled={'disabled' in option ? option.disabled : props.disabled}
          value={option.value}
          checked={state.value.indexOf(option.value) !== -1}
          onChange={() => this.toggleOption(option)}
          className={`${prefixCls}-item`}
        >
          {option.label}
        </Checkbox>
      ));
    }

    const classString = classNames(prefixCls, className);
    const wrapperClassString = classNames({
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-has-label`]: props.label,
    });
    const labelClassString = classNames(`${prefixCls}-label`, {
      'label-disabled': props.disabled,
    });
    return (
      <CheckboxContextProvider {...this.getContextValue()} getPrefixCls={getPrefixCls}>
        <div className={wrapperClassString}>
          {props.label ? <span className={labelClassString}>{props.label}</span> : null}
          <div className={classString} style={style}>
            {children}
          </div>
        </div>
      </CheckboxContextProvider>
    );
  }
}
