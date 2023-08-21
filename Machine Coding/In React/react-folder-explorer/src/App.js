
import React from 'react'
import Folder from './Folder';
import folderExplorer from './folderExplorerData';

const App = () => {
  return (
    <div>
      <Folder explorer={folderExplorer} />
    </div>
  )
}

export default App
