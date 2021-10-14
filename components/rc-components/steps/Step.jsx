import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RenderIcon from './RenderIcon'

function isString(str) {
  return typeof str === 'string';
}

export default class Step extends Component {
  static propTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    wrapperStyle: PropTypes.object,
    itemWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    status: PropTypes.string,
    iconPrefix: PropTypes.string,
    icon: PropTypes.node,
    adjustMarginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    stepNumber: PropTypes.string,
    description: PropTypes.any,
    title: PropTypes.any,
    progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    tailContent: PropTypes.any,
  };


  render() {
    const {
      className,
      prefixCls,
      style,
      itemWidth,
      status = 'wait',
      iconPrefix,
      icon,
      wrapperStyle,
      adjustMarginRight,
      stepNumber,
      description,
      title,
      progressDot,
      tailContent,
      isLast,
      ...restProps
    } = this.props;

    const classString = classNames(`${prefixCls}-item`, `${prefixCls}-item-${status}`, className, {
      [`${prefixCls}-item-custom`]: icon,
      [`${prefixCls}-item-last`]: isLast
    });
    const stepItemStyle = { ...style };
    if (itemWidth) {
      stepItemStyle.width = itemWidth;
    }
    if (adjustMarginRight) {
      stepItemStyle.marginRight = adjustMarginRight;
    }
    return (
      <div {...restProps} className={classString} style={stepItemStyle} ref={ref => { this.stepRef = ref }}>
        <div className={`${prefixCls}-item-tail`}>{tailContent}</div>
        <div className={`${prefixCls}-item-icon`}><RenderIcon {...this.props} /></div>
        <div className={`${prefixCls}-item-content`}>
          <div className={`${prefixCls}-item-title`}>{title}</div>
          {description && <div className={`${prefixCls}-item-description`}>{description}</div>}
        </div>
      </div>
    );
  }
}
