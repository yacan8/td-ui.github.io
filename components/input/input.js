/**
 * @Author: ginalu <ljq>
 * @Date:   2017-05-25 15:03:32
 * @Last modified by:   ljq
 * @Last modified time: 2017-05-25 15:03:32
 */
/* eslint-disable */
import React, {Component,cloneElement} from 'react';
import PropTypes from 'prop-types';
import cn from 'classNames';
import omit from 'lodash/omit';
import assign from 'object-assign';
import s from './style';

function fixControlledValue(value) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}
export interface InputProps {
	prefixCls ? : string;
	className ? : string;
	type ? : string;
	id ? : number | string;
	name ? : string;
	value ? : any;
	defaultValue ? : any;
	placeholder ? : string;
	size ? : 'large' | 'default' | 'small';
	disabled ? : boolean;
	readOnly ? : boolean;
	addonBefore ? : React.ReactNode;
	addonAfter ? : React.ReactNode;
	style ? : React.CSSProperties;
	prefix ? : React.ReactNode;
	suffix ? : React.ReactNode;
}
export default class Input extends Component {
	static defaultProps = {
		disabled: false,
		prefixCls: s.inputPrefix,
		type: 'text'
	};
	static propTypes = {
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		type: PropTypes.string,
		size: PropTypes.oneOf(['small', 'default', 'large']),
		disabled: PropTypes.bool,
		value: PropTypes.any,
		defaultValue: PropTypes.any,
		className: PropTypes.string,
		addonBefore: PropTypes.node,
		addonAfter: PropTypes.node,
		prefixCls: PropTypes.string,
		prefix: React.ReactNode,
		suffix: React.ReactNode,

	};
	renderLabeledInput(children) {
		const props = this.props;
		if (!props.addonBefore && !props.addonAfter) {
			return children;
		}
		const wrapperClassName = `${props.prefixCls}-group`;
		const {addonClassName} = `${wrapperClassName}-addon`;
		const addonBefore = props.addonBefore ? (<span className={addonClassName}>{props.addonBefore}</span>) : null;
		const addonAfter = props.addonAfter ? (<span className={addonClassName}>{props.addonAfter}</span>) : null;
		const className = cn({
			[`${props.prefixCls}-wrapper`]: true,
			[wrapperClassName]: (addonBefore || addonAfter),
		});
		return (<span>{addonBefore}{children}{addonAfter}</span>);
	}
	renderLabeledIcon(children) {
		const {props} = this;
		if (!('prefix' in props) || !('suffix' in props)) {
			return children;
		}
		const prefix = props.prefix ? (<span className={`${props.prefixCls}-prefix`}>{props.prefix}</span>) : null;
		const suffix = props.suffix ? (<span className={`${props.prefixCls}-suffix`}>{props.suffix}</span>) : null;

		return (
			<span className={`${props.prefixCls}-affix-wapper`} style={props.style}>
			{prefix}
			{cloneElement(children, { style: null })}
			{suffix}
			</span>
		);
	}
	renderInput() {
		const props = assign({}, this.props);
		const otherProps = omit(this.props, ['prefixCls', 'addonBefore', 'addonAfter', 'prefix', 'suffix']);
		const prefixCls = props.prefixCls;
		if (!props.type) {
			return props.children;
		}
		const inputClassName = cn(prefixCls, {
			[`${prefixCls}-sm`]: props.size === "small",
			[`${prefixCls}-lg`]: props.size === "large",
		}, props.className);
		if ('value' in props) {
			otherProps.value = fixControlledValue(props.value);
			delete otherProps.defaultValue;
		}
		return this.renderLabeledIcon(<input {...otherProps} className={inputClassName} ref="input" />);
	}

	render() {
		return this.renderLabeledInput(this.renderInput());
	}
}