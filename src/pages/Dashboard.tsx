import { useState } from 'react';
import HeaderBS from '../components/HeaderBS';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import useProjects from '../hooks/useProjects';

export default function Dashboard() {
  const { projects, columns, loading, error } = useProjects();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (loading) return <div style={{padding:'2rem'}}>Chargement...</div>;
  if (error) return <div style={{padding:'2rem', color:'red'}}>{error}</div>;

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh' }}>
      <HeaderBS title="TaskFlow" onMenuClick={() => setSidebarOpen(p => !p)} />
      <div style={{ display:'flex', flex:1, overflow:'hidden' }}>
        <Sidebar projects={projects} isOpen={sidebarOpen} />
        <MainContent columns={columns} />
      </div>
    </div>
  );
}