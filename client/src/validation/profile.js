import Validator from 'validator';
import isEmpty from './is-empty';
import isUndefined from './is-undefined';

export default function (data = {}) {
  const errors = {};

  if (!isUndefined(data.handle) && !Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 4 characters';
  }

  if (!isUndefined(data.handle) && Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  if (!isUndefined(data.status) && Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }

  if (!isUndefined(data.skills) && Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }

  if (!isUndefined(data.website) && !isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a valid URL';
    }
  }

  if (!isUndefined(data.handle) && !isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }

  if (!isUndefined(data.twitter) && !isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isUndefined(data.facebook) && !isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isUndefined(data.linkedin) && !isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }

  if (!isUndefined(data.instagram) && !isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return errors;
}
