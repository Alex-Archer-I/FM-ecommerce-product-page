import {ContextProvider} from './components/store/context-provider';

import Header from './components/header/header';
import Main from './components/main/main';

const App = () => {
  return (
    <ContextProvider>
      <Header/>
      <Main/>
    </ContextProvider>
  );
};

export default App;