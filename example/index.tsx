import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FirstSharedComponent, SecondSharedComponent, ThirdSharedComponent } from '../.';

const App = () => {
  return (
    <div>
      <div style={{ width: '500px', margin: '50px auto' }}>
        <FirstSharedComponent />
        <SecondSharedComponent />
        <ThirdSharedComponent />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
