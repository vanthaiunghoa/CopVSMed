import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ProductCard from './ProductCard.jsx';
import { Container } from '@material-ui/core';

function TabPanel(props) {
  const {
    value, tabIndex, items, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== tabIndex}
      id={`simple-tabpanel-${tabIndex}`}
      aria-labelledby={`simple-tab-${tabIndex}`}
      {...other}
    >
      <Box p={3}>
        <Container>
          <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
            {items.map((element, index) => <ProductCard item={element} key={index} />)}
          </Grid>
        </Container>
      </Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  items: PropTypes.any.isRequired,
  tabIndex: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
