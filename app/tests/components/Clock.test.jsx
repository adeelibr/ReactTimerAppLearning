import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Clock from '../../components/Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      let clock = TestUtils.renderIntoDocument(<Clock totalSeconds="62"/>)
      let $el = $(ReactDOM.findDOMNode(clock));
      let actualText = $el.find('.clock-text').text();
      console.log(actualText);
      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 615;
      let actual = clock.formatSeconds(seconds);
      let expected = '10:15';
      expect(actual).toBe(expected);
    });

    it('should format seconds when min/secs are less then 10', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 61;
      let actual = clock.formatSeconds(seconds);
      let expected = '01:01';
      expect(actual).toBe(expected);
    });
  });
});
