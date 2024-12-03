import React from 'react';
import { Box } from '@mui/material';
import Task from './Task';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => (
  <Box>
    {tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ))}
  </Box>
);

export default TaskList;
