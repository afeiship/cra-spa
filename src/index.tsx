import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import '@/shared/nx';
import '@/assets/styles/index.scss';
import { ReduxAppBase, reduxRender } from '@jswork/next-react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from '@/shared/routes';

@reduxRender('root', { prefix: 'react-spa' })
export default class extends ReduxAppBase {
  static initialState(inStore) {
    return {
      memory: {
        orders: {},
        users: {},
        login: { username: 'afei', password: '123123' },
      },
    };
  }

  render() {
    const {
      login: { username },
    } = nx.$memory;

    console.log('username', nx, React, username);

    return (
      <ConfigProvider locale={zhCN}>
        <Router>{renderRoutes(routes)}</Router>
      </ConfigProvider>
    );
  }
}
