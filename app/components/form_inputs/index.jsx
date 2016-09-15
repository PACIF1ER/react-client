import React from 'react';

export function descriptionInput(description) {
  return (
    <div className={`form-group ${description.meta.touched && description.meta.invalid ? 'text-danger' : ''}`}>
      <label> Task </label>
      <input type="text" {...description.input} className="form-control" placeholder="Task"/>
      <div className="text-helper">
        {description.meta.touched ? description.meta.error : ''}
      </div>
    </div>
  )
}

export function emailInput(email) {
  return (
    <div className={`form-group ${email.meta.touched && email.meta.invalid ? 'text-danger' : ''}`}>
      <label> Email </label>
      <input type="email" {...email.input} className="form-control" placeholder="Email"/>
      <div className="text-helper">
        {email.meta.touched ? email.meta.error : ''}
      </div>
    </div>
  )
}

export function passwordInput(password) {
  return (
    <div className={`form-group ${password.meta.touched && password.meta.invalid ? 'text-danger' : ''}`}>
      <label> Password </label>
      <input type="password" {...password.input} className="form-control" placeholder="Password"/>
      <div className="text-helper">
        {password.meta.touched ? password.meta.error : ''}
      </div>
    </div>
  )
}

export function passwordConfirmationInput(password_confirmation) {
  return (
    <div className={`form-group ${password_confirmation.meta.touched && password_confirmation.meta.invalid ? 'text-danger' : ''}`}>
      <label> Password </label>
      <input type="password" {...password_confirmation.input} className="form-control" placeholder="Password Confirmation"/>
      <div className="text-helper">
        {password_confirmation.meta.touched ? password_confirmation.meta.error : ''}
      </div>
    </div>
  )
}

export function firstNameInput(first_name) {
  return (
    <div className={`form-group ${first_name.meta.touched && first_name.meta.invalid ? 'text-danger' : ''}`}>
      <label> First Name </label>
      <input type="text" {...first_name.input} className="form-control" placeholder="First Name"/>
      <div className="text-helper">
        {first_name.meta.touched ? first_name.meta.error : ''}
      </div>
    </div>
  )
}

export function lastNameInput(last_name) {
  return (
    <div className={`form-group ${last_name.meta.touched && last_name.meta.invalid ? 'text-danger' : ''}`}>
      <label> Last Name </label>
      <input type="text" {...last_name.input} className="form-control" placeholder="Last Name"/>
      <div className="text-helper">
        {last_name.meta.touched ? last_name.meta.error : ''}
      </div>
    </div>
  )
}
