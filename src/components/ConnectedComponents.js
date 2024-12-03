import { connect } from 'react-redux';
import { addTask, editTask, deleteTask, toggleTask, setFilter } from '../components/actions';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.filter,
});

const mapDispatchToProps = {
  onToggle: toggleTask,   
  onEdit: editTask,      
  onDelete: deleteTask,
  addTask,
  editTask,
  deleteTask,
  toggleTask,
  setFilter,
};

// Pass the addTask action as onSubmit to TaskForm
const ConnectedTaskForm = connect(null, { onSubmit: addTask })(TaskForm);
const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export { ConnectedTaskForm, ConnectedTaskList };