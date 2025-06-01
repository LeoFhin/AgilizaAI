import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Feed from './pages/Feed'
import Header from './components/Header'
import ProviderProfile from './pages/ProviderProfile'
import CoursesPage from './pages/CoursePage.Jsx'
import CourseDetailPage from './components/CourseDetailPage'
import ConfiguracoesPage from './pages/ConfiguracoesPage'
import ClientsPage from './pages/ClientsPage'
import ClientChatPage from './pages/ClientChatPage'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<Feed />} />  
        <Route path="/perfil" element={<ProviderProfile />} />
        <Route path="/prestador/:id" element={<ProviderProfile />} />     
        <Route path="/cursos" element={<CoursesPage/>} /> 
        <Route path="/cursos/:courseId" element={<CourseDetailPage/>} />  
        <Route path="/clientes" element={<ClientsPage/>} />  
        <Route path="/clientes/conversa/:clientId" element={<ClientChatPage/>} /> 
        <Route path="/configuracoes" element={<ConfiguracoesPage/>} />   
      </Routes>
    </BrowserRouter>
  )
}

export default App
