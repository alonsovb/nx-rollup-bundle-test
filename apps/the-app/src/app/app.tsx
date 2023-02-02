import '@bhuma.dev/react-dashboard/index.css';

import { BhumaDashboard } from '@bhuma.dev/react-dashboard';

export function App() {
  return (
    <div style={{ backgroundColor: 'beige' }}>
      <h1 style={{ fontSize: 36, fontFamily: 'sans-serif' }}>
        My embedded app
      </h1>
      <BhumaDashboard
        pageId="638022970309aa24c5f6c8b1"
        productId="6352f42a866d0dc8d2e599e4"
      />
    </div>
  );
}

export default App;
