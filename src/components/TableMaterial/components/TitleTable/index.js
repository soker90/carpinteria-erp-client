import { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

const TitleTable = ({ title }) => (
  title
    ? (
      <Box p={2}>
        <Box
          display='flex'
          alignItems='center'
        >
          <Typography
            variant='h4'
            color='textPrimary'
          >
            {title}
          </Typography>
        </Box>
      </Box>
    )
    : null
);

TitleTable.propTypes = {
  title: PropTypes.string,
};

TitleTable.displayName = 'TitleTable';
export const story = TitleTable;
export default memo(TitleTable);
