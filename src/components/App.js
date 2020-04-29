import { hot } from 'react-hot-loader/root';
import React from 'react';

// import { welcome } from '@modules/index';
import Welcome from '@modules/welcome/components/Welcome';

const App = () => {
  // const {
  //   components: { Welcome },
  // } = welcome;

  return (
    <div className="App">
      <Welcome />
    </div>
  );
};

export default hot(App);
