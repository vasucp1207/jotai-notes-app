import { SvgRoot } from './SvgRoot';
import { Controls } from './Controls';
import { Provider } from 'jotai';

const App = () => (
  <>
    <Provider>
      <SvgRoot />
      <Controls />
    </Provider>
  </>
);

export default App;
