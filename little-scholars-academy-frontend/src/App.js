import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import AddStudent from './components/Students/AddStudent';
import StudentList from './components/Students/StudentList';
import AddTeacher from './components/Teachers/AddTeacher';
import TeacherList from './components/Teachers/TeacherList';
import AddClass from './components/Classes/AddClass';
import ClassList from './components/Classes/ClassList';
import MarkAttendance from './components/Attendance/MarkAttendance';
import AttendanceList from './components/Attendance/AttendanceList';
import AddAssignment from './components/Assignments/AddAssignment';
import AssignmentList from './components/Assignments/AssignmentList';
import AddGrade from './components/Grades/AddGrade';
import GradeList from './components/Grades/GradeList';
import Announcements from './components/Communication/Announcements';
import Messaging from './components/Communication/Messaging';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/teacher/dashboard" component={TeacherDashboard} />
        <Route path="/student/dashboard" component={StudentDashboard} />
        <Route path="/students/add" component={AddStudent} />
        <Route path="/students" component={StudentList} />
        <Route path="/teachers/add" component={AddTeacher} />
        <Route path="/teachers" component={TeacherList} />
        <Route path="/classes/add" component={AddClass} />
        <Route path="/classes" component={ClassList} />
        <Route path="/attendance/mark" component={MarkAttendance} />
        <Route path="/attendance" component={AttendanceList} />
        <Route path="/assignments/add" component={AddAssignment} />
        <Route path="/assignments" component={AssignmentList} />
        <Route path="/grades/add" component={AddGrade} />
        <Route path="/grades" component={GradeList} />
        <Route path="/announcements" component={Announcements} />
        <Route path="/messaging" component={Messaging} />
      </Switch>
    </Router>
  );
}

export default App;
