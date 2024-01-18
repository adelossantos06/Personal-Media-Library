import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Movies from './Movies';
import TV from './TV';
import Books from './Books';
import AddForm from './AddForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/movies",
    element: <Movies />
  },
  {
    path: "/tv",
    element: <TV />
  },
  {
    path: "/books",
    element: <Books />
  },
  {
    path: "/addForm",
    element: <AddForm />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
