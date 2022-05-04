import React, { useState } from 'react'
import { treeApi } from './api';
import Tree from './components/Tree';
import useFetch from './hooks/useFetch';
import FilePreview from './components/FilePreview';

import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { PreviewFileContext } from './context/PreviewFileContext';



function App() {

  const [previewFile, setPreviewFile] = useState(null)
    
  const {response, isLoading, error }= useFetch({
    api: treeApi,
    method: "get",
    url: "/"
  })   
   
   const renderTree = () => {

    if(isLoading){
      return <Spinner animation="border" />        
    }
    if(error){
      return <span>Error fetching data</span>
    }
    return <Tree node={response}/>
   }


  return (
    <PreviewFileContext.Provider value={{previewFile, setPreviewFile}}>
      <div className='container'>
        <h1 className='text-center'>GPM-Client</h1>
        <div className='row border' style={{height:'80vh'}}>
          <div className='col-4 border p-5'>
            <h5>File Tree</h5>    
            {renderTree()}
          </div>  
          <div className='col'>
            <h5 className='text-center mt-3'>File preview</h5>
            <FilePreview />
          </div>  
        </div>
      </div>
    </PreviewFileContext.Provider>        
  )
}
export default App