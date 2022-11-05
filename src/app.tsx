// import * as ReactDOM from 'react-dom';

// function render() {
//   ReactDOM.render(<h2>Hello from React!</h2>, document.body);
// }

// render();

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h2>Hello from React!</h2>);