import { createAction } from 'redux-actions';

export const addTask = createAction('TASK_ADD');
export const updateNewTaskText = createAction('NEW_TASK_TEXT_UPDATE');
export const inverseTaskTheme = createAction('TASK_INVERSE_THEME');
