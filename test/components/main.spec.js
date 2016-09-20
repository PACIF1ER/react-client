import { shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import { logoutUser } from '../../app/actions/index';
import { Main } from '../../app/components/main.jsx';

describe('<Main />', () => {
  const unAuthWrapper = shallow(<Main logoutUser={logoutUser} authenticated={false}  />);
  const authWrapper = shallow(<Main logoutUser={logoutUser} authenticated={true} />);

  it('renders register and login while unauthenticated', () => {
    expect(unAuthWrapper.find('#register-btn')).to.have.length(1)
    expect(unAuthWrapper.find('#login-btn')).to.have.length(1)
  })

  it('does not render dashboard and logout while unauthenticated', () => {
    expect(unAuthWrapper.find('#dashboard-btn')).to.have.length(0)
    expect(unAuthWrapper.find('#logout-btn')).to.have.length(0)
  })

  it('does not render register and login while authenticated', () => {
    expect(authWrapper.find('#register-btn')).to.have.length(0)
    expect(authWrapper.find('#login-btn')).to.have.length(0)
  })

  it('renders dashboard and logout while authenticated', () => {
    expect(authWrapper.find('#dashboard-btn')).to.have.length(1)
    expect(authWrapper.find('#logout-btn')).to.have.length(1)
  })
})
