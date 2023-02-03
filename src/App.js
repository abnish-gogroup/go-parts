import { Provider } from 'react-redux';
import MainContainer from './workshops/containers/MainContainer';
import RouterPath from './workshops/router/RouterPath';
import configurePanelStore from './workshops/store/configureDashboardStore';

function App() {
  const store = configurePanelStore();
  return (
    <div className="App">
        <RouterPath />
    </div>
  );
}

export default App;
