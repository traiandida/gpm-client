import React from 'react'
import { treeApi } from './api';
import Tree from './components/Tree';
import useFetch from './hooks/useFetch';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

   const {response, isLoading, error } = useFetch({
     api: treeApi,
     method: "get",
     url: "/"
   })

   const render = () => {

    if(isLoading){
      return <span>Loading...</span>
    }
    if(error){
      return <span>Error fetching data</span>
    }
    return <Tree node={response}/>
   }

  return (
    <div>
      {/* <h1 className='text-center'>GPM-Client</h1> */}
      <div className='container mt-5 p-5 border'>    
      <h5>File Tree</h5>    
        {render()}
      </div>
    </div>

      
      
  )
}
export default App