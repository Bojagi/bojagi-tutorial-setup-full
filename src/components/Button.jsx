import React from 'react';
require('./Button.css');

export const Button = ({variant, children}) => {
  let classes = ['button'];
  if (variant === 'outline') {
    classes.push('outlined');
  } else if (variant === 'dotted') {
    classes.push('outlined');
    classes.push('dotted');
  }
  console.log('classes', classes);
  return (
    <button className={classes.join(' ')}>{children}</button>
  );
}
