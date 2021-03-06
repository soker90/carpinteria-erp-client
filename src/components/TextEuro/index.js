import { memo } from 'react';
import PropTypes from 'prop-types';
import { format } from 'utils';
import clsx from 'clsx';
import { useStyles } from './styles';

const TextEuro = ({
  num, Component, className, decimals, ...rest
}) => {
  const classes = useStyles();
  const getColorAmount = (num < 0 ? classes.red : '');

  return (
    <Component
      className={clsx(getColorAmount, className)}
      {...rest}
    >
      {format.euro(num, { maximumFractionDigits: decimals })}
    </Component>
  );
};

TextEuro.propTypes = {
  num: PropTypes.number,
  Component: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  decimals: PropTypes.number,
};

TextEuro.defaultProps = {
  Component: 'span',
  decimals: 2,
};

TextEuro.displayName = 'TextEuro';
export const story = TextEuro;
export default memo(TextEuro);
