import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from './components/actions';
import { ConnectedTaskList, ConnectedTaskForm } from './components/ConnectedComponents';
import { Box, CssBaseline, Drawer, Toolbar, Typography, Button, AppBar, Grid, Paper, Card, CardContent } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { TaskAlt, ListAlt, TrendingUp } from '@mui/icons-material';

const drawerWidth = 240;

const taskSummary = [
  { name: 'Completed', value: 60, color: '#4caf50' },
  { name: 'Pending', value: 30, color: '#ff9800' },
  { name: 'Overdue', value: 10, color: '#f44336' },
];

const App = ({ setFilter }) => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    {/* Top App Bar */}
    <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#1e1e2f' }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Task Management Dashboard
        </Typography>
      </Toolbar>
    </AppBar>

    {/* Sidebar */}
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1e1e2f',
          color: '#ffffff',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', padding: 2 }}>
        <Button fullWidth sx={{ color: 'white' }} onClick={() => setFilter('ALL')}>All Tasks</Button>
        <Button fullWidth sx={{ color: 'white' }} onClick={() => setFilter('COMPLETED')}>Completed Tasks</Button>
        <Button fullWidth sx={{ color: 'white' }} onClick={() => setFilter('PENDING')}>Pending Tasks</Button>
        <Button fullWidth sx={{ color: 'white' }} onClick={() => setFilter('OVERDUE')}>Overdue Tasks</Button>
      </Box>
    </Drawer>

    {/* Main Content */}
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: '#f5f5f5', p: 3 }}
    >
      <Toolbar />
      <Grid container spacing={3}>
        {/* Analytics */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ background: 'linear-gradient(45deg, #3f51b5, #5c6bc0)', color: 'white' }}>
            <CardContent>
              <Typography variant="h5">Website Analytics</Typography>
              <Typography>Total 28.5% Conversion Rate</Typography>
              <Typography>Tasks Summary:</Typography>
              <PieChart width={200} height={200}>
                <Pie data={taskSummary} dataKey="value" outerRadius={80} label>
                  {taskSummary.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </Grid>

        {/* Earnings Report */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ background: 'linear-gradient(45deg, #4caf50, #66bb6a)', color: 'white' }}>
            <CardContent>
              <Typography variant="h5">Earning Reports</Typography>
              <Typography>$468 Weekly Earnings Overview</Typography>
              <BarChart width={200} height={200} data={[
                { name: 'Mon', value: 40 },
                { name: 'Tue', value: 30 },
                { name: 'Wed', value: 20 },
                { name: 'Thu', value: 27 },
                { name: 'Fri', value: 50 },
                { name: 'Sat', value: 34 },
                { name: 'Sun', value: 43 },
              ]}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#ffffff" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>

        {/* Support Tracker */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ background: 'linear-gradient(45deg, #f44336, #e57373)', color: 'white' }}>
            <CardContent>
              <Typography variant="h5">Support Tracker</Typography>
              <Typography variant="h6">Completed: 85%</Typography>
              <TaskAlt fontSize="large" />
            </CardContent>
          </Card>
        </Grid>

        {/* Task Management */}
        <Grid item xs={12}>
          <ConnectedTaskForm />
        </Grid>
        <Grid item xs={12}>
          <ConnectedTaskList />
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default connect(null, { setFilter })(App);
