import React from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react';

import MockAdapter from 'axios-mock-adapter';
import api from '../../services/apiClient';

import Dashboard from '../../pages/Dashboard';

const apiMock = new MockAdapter(api);

describe('Dashboard page', () => {
  it('should be able to show filters and initial filtered list', async () => {
    const { getByTestId, getByText } = render(<Dashboard />);

    apiMock.onGet('filter').reply(200, [
      {
        id: 0,
        name: 'Todos',
        quantity: 8,
      },
      {
        id: 1,
        name: 'Em execução',
        quantity: 2,
      },
    ]);

    apiMock.onGet('journey').reply(200, [
      {
        name: 'Cobrança',
        status: 1,
        recipients: '20.210.000',
        success: '30%',
        id: '5f32ab1bbf56d11b4853a92c',
      },
      {
        name: 'Promoção',
        status: 1,
        recipients: '1.940.000',
        success: '78%',
        id: '5f32844cbf56d11b4853a929',
      },
      {
        name: 'Divulgação novos serviços',
        status: 2,
        recipients: '210.000',
        success: '89%',
        id: '5f3193f1bf56d11b4853a927',
      },
    ]);

    await waitFor(() => expect(getByText('Cobrança')).toBeTruthy(), {
      timeout: 200,
    });

    await waitFor(() => {
      expect(getByTestId('filter-items')).not.toBeEmpty();
    });

    expect(getByText('Cobrança')).toBeTruthy();
    expect(getByText('20.210.000')).toBeTruthy();
    expect(getByText('30%')).toBeTruthy();

    expect(getByText('Promoção')).toBeTruthy();
    expect(getByText('1.940.000')).toBeTruthy();
    expect(getByText('78%')).toBeTruthy();

    expect(getByText('Divulgação novos serviços')).toBeTruthy();
    expect(getByText('210.000')).toBeTruthy();
    expect(getByText('89%')).toBeTruthy();
  });

  it('should be able to change list when click in a new filter type', async () => {
    const { getByText } = render(<Dashboard />);

    apiMock.onGet('filter').reply(200, [
      {
        id: 0,
        name: 'Todos',
        quantity: 8,
      },
      {
        id: 1,
        name: 'Em execução',
        quantity: 1,
      },
    ]);

    apiMock.onGet('journey/1').reply(200, [
      {
        name: 'Promoção',
        status: 1,
        recipients: '1.940.000',
        success: '78%',
        id: '5f32844cbf56d11b4853a929',
      },
    ]);

    await waitFor(() => expect(getByText('Em execução')).toBeTruthy(), {
      timeout: 200,
    });

    act(() => {
      fireEvent.click(getByText('Em execução'));
    });

    await waitFor(() => expect(getByText('Promoção')).toBeTruthy(), {
      timeout: 200,
    });

    expect(getByText('Promoção')).toBeTruthy();
    expect(getByText('1.940.000')).toBeTruthy();
    expect(getByText('78%')).toBeTruthy();
  });

  it('should be able to open modal', async () => {
    apiMock.onGet('filter').reply(200, []);
    apiMock.onGet('journey').reply(200, []);

    const { getByTestId } = render(<Dashboard />);

    const button = await waitFor(() => getByTestId('journey-modal-button'));

    act(() => {
      fireEvent.click(button);
    });

    const modal = await waitFor(() => getByTestId('journey-modal-container'));

    expect(modal).toBeVisible();
  });
});
