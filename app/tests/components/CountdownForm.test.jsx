import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import countdownFrom from '../../components/CountdownForm';

describe('CountdownForm', () => {
  it('should exists', () => {
    expect(countdownFrom).toExist();
  });
});