import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../src/layout/Layout';
import './index.html'; // eslint-disable-line import/no-unassigned-import
import './index.scss'; // eslint-disable-line import/no-unassigned-import
import './ditto.ico'; // eslint-disable-line import/no-unassigned-import

ReactDOM.render(
	<Layout />,
	document.getElementById('root'),
);
