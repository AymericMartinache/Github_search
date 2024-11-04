import ReactDOM from 'react-dom/client';

//* --- ROUTER --
import { BrowserRouter } from 'react-router-dom';

//* --- APP --
import App from './components/App/App';

//* --- CSS --
import './styles/index.scss';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
