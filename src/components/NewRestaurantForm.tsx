import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Button, TextField, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { createRestaurant } from '../store/restaurants/actions';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export interface NewRestaurantFormProps {
  createRestaurant: (name: string) => any;
}

export function NewRestaurantForm({
  createRestaurant,
}: NewRestaurantFormProps) {
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const classes = useStyles();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name) {
      setValidationError(false);
      setServerError(false);

      createRestaurant(name)
        .then(() => {
          setName('');
        })
        .catch(() => {
          setServerError(true);
        });
    } else {
      setValidationError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {serverError && (
        <Alert severity="error">
          The restaurant could not be saved. Please try again.
        </Alert>
      )}
      {validationError && <Alert severity="error">Name is required</Alert>}
      <Box display="flex" className={classes.root}>
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Add Restaurant"
          fullWidth
          variant="filled"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          data-testid="new-restaurant-submit-button"
        >
          Add
        </Button>
      </Box>
    </form>
  );
}

const mapStateToProps = null;
const mapDispatchToProps = { createRestaurant };

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantForm);
