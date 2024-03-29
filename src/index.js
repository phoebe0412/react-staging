// 引入react核心庫
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
// 引入App組件
import App from './App';

// 渲染App到頁面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
