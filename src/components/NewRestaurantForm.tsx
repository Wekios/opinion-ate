import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { createRestaurant } from '../store/restaurants/actions';

export interface NewRestaurantFormProps {
  createRestaurant: (name: string) => any;
}

export function NewRestaurantForm({
  createRestaurant,
}: NewRestaurantFormProps) {
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [serverError, setServerError] = useState(false);

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
    </form>
  );
}

const mapStateToProps = null;
const mapDispatchToProps = { createRestaurant };

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantForm);
