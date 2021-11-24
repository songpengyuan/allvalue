import React, { CSSProperties, ReactNode } from 'react';

/**
 * @title Button
 */
export interface ButtonProps {
  children?: ReactNode;
  style?: CSSProperties;
}

const Button = (props: ButtonProps) => {
  const { style } = props;
  return <h3 style={style}>This is Button</h3>;
};

export default Button;
