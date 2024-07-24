import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleTasks } from '../../redux/selectors';
import { Task } from '../Task/Task';
import css from './TaskList.module.css';

export const TaskList = () => {
  const visibleTasks = useSelector(getVisibleTasks);

  return (
    <ul className={css.list}>
      {Array.isArray(visibleTasks) && visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
