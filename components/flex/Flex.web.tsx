import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import FlexProps from './FlexPropTypes';

export default class Flex extends React.Component<FlexProps, any> {
  static Item: any;

  static propTypes = {
    direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
    align: PropTypes.oneOf(['start', 'end', 'center', 'top', 'middle', 'bottom', 'baseline', 'stretch']),
    alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  };

  static defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center',
    onClick: () => {},
  };

  render() {
    let { direction, wrap, justify, align, alignContent, className, children, prefixCls, style, onClick } = this.props;

    const wrapCls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-dir-row`]: direction === 'row',
      [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
      [`${prefixCls}-dir-column`]: direction === 'column',
      [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

      [`${prefixCls}-nowrap`]: wrap === 'nowrap',
      [`${prefixCls}-wrap`]: wrap === 'wrap',
      [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

      [`${prefixCls}-justify-start`]: justify === 'start',
      [`${prefixCls}-justify-end`]: justify === 'end',
      [`${prefixCls}-justify-center`]: justify === 'center',
      [`${prefixCls}-justify-between`]: justify === 'between',
      [`${prefixCls}-justify-around`]: justify === 'around',

      [`${prefixCls}-align-top`]: align === 'top' || align === 'start',
      [`${prefixCls}-align-middle`]: align === 'middle' || align === 'center',
      [`${prefixCls}-align-bottom`]: align === 'bottom' || align === 'end',
      [`${prefixCls}-align-baseline`]: align === 'baseline',
      [`${prefixCls}-align-stretch`]: align === 'stretch',

      [`${prefixCls}-align-content-start`]: alignContent === 'start',
      [`${prefixCls}-align-content-end`]: alignContent === 'end',
      [`${prefixCls}-align-content-center`]: alignContent === 'center',
      [`${prefixCls}-align-content-between`]: alignContent === 'between',
      [`${prefixCls}-align-content-around`]: alignContent === 'around',
      [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch',

      [className]: className,
    });

    return (
      <div className={wrapCls} style={style} onClick={onClick}>
        {children}
      </div>
    );
  }
}
