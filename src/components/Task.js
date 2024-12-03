import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import './Task.css';


const Task = ({ task, onEdit, onDelete, onToggle }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h5">{task.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {task.description}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        Due: {task.dueDate}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => onToggle(task.id)}>
        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </Button>
      <Button size="small" onClick={() => onEdit(task)}>Edit</Button>
      <Button size="small" color="error" onClick={() => onDelete(task.id)}>Delete</Button>
    </CardActions>
  </Card>
);

export default Task;
