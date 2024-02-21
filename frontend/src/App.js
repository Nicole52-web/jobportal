import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider  } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import ContactForm from './pages/Contact';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './component/UserRoute';
import AdminRoute from './component/AdminRoute';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import SingleJob from './pages/user/SingleJob';
import FileUpload from './pages/user/FileUpload';
import DashDownload from './pages/admin/DashDownload';
import DashUsers from './pages/admin/DashUsers';
import DashJobs from './pages/admin/DashJobs';
import DashCreateJob from './pages/admin/DashCreateJob';
import DashCategory from './pages/admin/DashCategory';
import DashCreateCategory from './pages/admin/DashCreateCategory';
import DashEditCategory from './pages/admin/DashEditCategory';
import DashEditJob from './pages/admin/DashEditJob';

import { createTheme } from '@mui/material';
import { themeColors } from './theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';


//High Order Components
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers)
const DashJobsHOC = Layout(DashJobs)
const FileUploadHOC = Layout(FileUpload)
const DashDownloadHOC = Layout(DashDownload)
const DashCreateJobHOC = Layout(DashCreateJob)
const DashEditJobHOC = Layout(DashEditJob)
const DashCategoryHOC = Layout(DashCategory)
const DashCreateCategoryHOC = Layout(DashCreateCategory)
const DashEditCategoryHOC = Layout(DashEditCategory)


const App = () =>{
  
  return(
      <>

      <ToastContainer/>

      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ProSidebarProvider>

        <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Home/>}/>
        <Route path='/search/location/:location' element={ <Home/>}/>
        <Route path='/search/:keyword' element={ <Home/>}/>
        <Route path='/login' element={ <LogIn/>}/>
        <Route path='/register' element={ <Register/>}/>
        <Route path='/contact' element={ <ContactForm/>}/>
        <Route path='/job/:id' element={ <SingleJob/>}/>
        <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC/></AdminRoute> }/>
        <Route path='/admin/users' element={<AdminRoute><DashUsersHOC/></AdminRoute> }/>
        <Route path='/admin/jobs' element={<AdminRoute><DashJobsHOC/></AdminRoute> }/>
        <Route path='/admin/category' element={<AdminRoute><DashCategoryHOC/></AdminRoute> }/>
        <Route path='/admin/job/create' element={<AdminRoute><DashCreateJobHOC/></AdminRoute> }/>
        <Route path= '/admin/edit/job' element={<AdminRoute><DashEditJobHOC/></AdminRoute> }/>
        <Route path='/admin/category/create' element={<AdminRoute><DashCreateCategoryHOC/></AdminRoute> }/>
        <Route path='/admin/edit/category' element={<AdminRoute><DashEditCategoryHOC/></AdminRoute> }/>
        <Route path='/admin/downloads' element={<AdminRoute><DashDownloadHOC/></AdminRoute> }/>
        <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC/></UserRoute> }/>
        <Route path='/user/jobs' element={<UserRoute><UserJobsHistoryHOC/></UserRoute> }/>
        <Route path='/user/uploads' element={<UserRoute><FileUploadHOC/></UserRoute> }/>
        <Route path='/user/info' element={<UserRoute><UserInfoDashboardHOC/></UserRoute> }/>
        
        <Route path='*' element={ <NotFound/>}/>

      </Routes>
      </BrowserRouter>
        </ProSidebarProvider>
      
        </ThemeProvider>
      
      </>
  )
}

export default App