import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const { tasks: { byId, allIds }, tasksUIState } = state;
  const tasks = allIds.map((id) => byId[id]);
  return { tasks, tasksUIState };
};

const actionCreators = {
  inverseTaskTheme: actions.inverseTaskTheme,
};

const Tasks = ({
  inverseTaskTheme,
  tasksUIState,
  tasks,
}) => {
  const handleInverseTaskTheme = (task) => (e) => {
    e.preventDefault();
    inverseTaskTheme({ task });
  };

  const renderTask = (task) => {
    const themeToClasses = {
      dark: 'bg-dark text-light',
      light: 'bg-light text-dark',
    };

    const currentThemeClass = themeToClasses[tasksUIState[task.id].theme];

    const classes = cn({
      'list-group-item d-flex': true,
      [currentThemeClass]: true,
    });

    return (
      <li key={task.id} className={classes}>
        <span className="mr-auto">
          <a href="#" className="text-reset" onClick={handleInverseTaskTheme(task)}>{task.text}</a>
        </span>
      </li>
    );
  };

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(renderTask)}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Tasks);
