import React, { useContext} from 'react'
import { PreviewFileContext } from '../../context/PreviewFileContext'

function FilePreview() {
  
  const {previewFile} = useContext(PreviewFileContext)  
  const src = previewFile !== null ? previewFile : false
    
  return (
    <div>
        {src && 
        <iframe title='preview-iframe' src={src} className='d-block w-100' style={{height:"50vh"}}></iframe>}
        
    </div>
  )
}

export default FilePreview