import App from './app/app';
import { createRoot } from 'react-dom/client';

const Container = document.getElementById('root') as HTMLElement;
const Root = createRoot(Container);

Root.render(<App />);
