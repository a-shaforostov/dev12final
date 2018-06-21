import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Loader from './components/Loader';
import Application from './components/Application/Loadable';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Fragment>
    <Loader/>
    <Application />
  </Fragment>,
  document.getElementById('root'),
);

registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}
