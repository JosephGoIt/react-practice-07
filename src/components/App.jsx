// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => (
  <Provider store={store}>
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  </Provider>
);
