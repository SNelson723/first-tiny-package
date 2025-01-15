import React from 'react';
import Button  from './index';
import { render, screen } from '@testing-library/react';
import { getByQueryId } from '../../mocks/query';
import { userEvent } from '@testing-library/user-event'

describe('Button', () => {

  it('should render', async () => {
    render(<Button />);
    const message = getByQueryId('message');
    expect(message.textContent).toEqual('')

    const button = getByQueryId('button');
    expect(button.textContent).toEqual('Click me')

    await userEvent.click(button);
    expect(message.textContent).toEqual('Click me again!');

    await userEvent.click(button);
    expect(message.textContent).toEqual('You click so well!');

    await userEvent.click(button);
    expect(message.textContent).toEqual('Woah, click too much?');

    await userEvent.click(button);
    expect(message.textContent).toEqual('Get a life...');
    expect(button.textContent).toEqual('We are done here...')

  });


});