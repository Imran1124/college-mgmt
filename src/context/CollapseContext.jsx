import { useState } from 'react';

export default function CollapseContext() {
  const [collapsed, setSidebarCollapsed] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  return {
    collapsed,
    setSidebarCollapsed,
    showSidebar,
    setShowSidebar
  };
}
