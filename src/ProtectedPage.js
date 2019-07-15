import React, { useEffect } from 'react';
import { getToken } from './utils';
import Layout from './Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import DashboardPage from './dashboard/DashboardPage';
import SuppliersPage from './supplier/SuppliersPage';

import SupplierCreatePage from './supplier/SupplierCreatePage';

// ...



function ProtectedPage(props) {
  const { history } = props;
  useEffect(() => {
    const token = getToken();
    if (!token) {
      history.push('/login');
    }
  });

  return (
    <Layout {...props}>
      <Switch>
      <Route path="/suppliers/create" component={SupplierCreatePage} />
        <Route path="/suppliers" component={SuppliersPage} />
        <Route exact path="/" component={DashboardPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}



export default ProtectedPage;