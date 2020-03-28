import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

import {MainContext, Provider} from './provider';

const MainComponent = () => {
  return (
    <>
    <Provider>
        <MainContext.Consumer>
          {
            ({ state }) => <>{state.display}</>
          }
        </MainContext.Consumer>
    </Provider>
  </>
  )
}

ReactDOM.render(
  <MainComponent />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
