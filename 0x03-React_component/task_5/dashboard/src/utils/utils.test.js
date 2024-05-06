import React from 'react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

it('should return the correct year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

it('should return the correct footer when true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

it('should return the correct footer when false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

it('should return the correct notification', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD',
  );
});
