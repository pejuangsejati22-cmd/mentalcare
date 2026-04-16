import React, { useState } from 'react';
import './Sidebar.css';

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

interface SidebarProps {
  onNavigate: (path: string) => void;
  activePath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, activePath }) => {
  const menuItems: SidebarItem[] = [
    { id: '1', label: 'Dashboard', icon: '📊', path: 'dashboard' },
    { id: '2', label: 'Input Data', icon: '📝', path: 'input-data' },
    { id: '3', label: 'Hasil Prediksi', icon: '🎯', path: 'hasil-prediksi' },
    { id: '4', label: 'Analisis Faktor', icon: '📈', path: 'analisis-faktor' },
    { id: '5', label: 'Riwayat Data', icon: '📋', path: 'riwayat-data' },
    { id: '6', label: 'Laporan & Export', icon: '💾', path: 'laporan-export' },
    { id: '7', label: 'Tentang Sistem', icon: 'ℹ️', path: 'tentang-sistem' },
  ];

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}> 
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🧠</span>
          {!isCollapsed && <span className="logo-text">MentalCare</span>}
        </div>
        <button 
          className="toggle-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activePath === item.path ? 'active' : ''}`}
            onClick={() => onNavigate(item.path)}
            title={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
            {!isCollapsed && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">BR</div>
          {!isCollapsed && (
            <div className="user-details">
              <p className="user-name">Bagus Riyadi</p>
              <p className="user-role">Peneliti</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;