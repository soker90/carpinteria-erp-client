/* eslint-disable react/prop-types */
import {
  memo, useEffect, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Divider,
  CardHeader,
} from '@material-ui/core';

import {
  InputForm,
} from 'components/index';
import { useDebounce } from 'hooks';

import { useStyles } from './SearchForm.styles';

const SearchForm = ({
  get,
  initialState,
  fields,
}) => {
  const [state, setState] = useReducer(
    (oldstate, newState) => ({ ...oldstate, ...newState }),
    initialState,
  );
  const classes = useStyles();
  const debounce = useDebounce();

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    debounce(() => {
      get(state);
    }, 500);
  }, [state]);

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @param {Boolean} checked
   * @private
   */
  const _handleChange = ({
    target: {
      name,
      value,
    },
  }) => {
    setState({ [name]: value });
  };

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') get();
  };

  /**
   * Render a input element
   * @param {string} name
   * @param {String} label
   * @param {Object} options
   * @returns {InputForm}
   * @private
   */
  const _renderInput = ({
    id,
    label,
    options = {},
  }) => (
    <InputForm
      key={id}
      value={state[id] || ''}
      onChange={_handleChange}
      name={id}
      label={label}
      onKeyPress={_handleKeyPress}
      size={2}
      {...options}
    />
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        title='Búsqueda'
      />
      <Divider />
      <CardContent>
        <Grid spacing={3} container>
          {fields.map(_renderInput)}
        </Grid>
      </CardContent>
    </Card>
  );
};

SearchForm.propTypes = {
  get: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
};

SearchForm.displayName = 'SearchForm';

export default memo(SearchForm);
