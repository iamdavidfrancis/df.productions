import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div id="bg" />
    <div id="overlay" />
    <div id="main">
      <header id="header">
        <h1>Page Not Found</h1>
        <p>
          Try going <Link to="/">Home</Link>
        </p>
      </header>
    </div>
  </Layout>
);

export default NotFoundPage;
