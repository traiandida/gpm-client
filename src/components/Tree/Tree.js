import React, { useContext, useState } from 'react'
import axios from 'axios';
import "./Tree.css"
import { API } from 'constants';
import { PreviewFileContext } from 'context/PreviewFileContext';




function Tree({node}) {
    
    const [collapsed, setCollapsed] = useState(true);
    const hasChildren = node.children ? true : false;
    const isFile = node.type === 'file' ? true : false;
    const icon = isFile ? <i className="bi bi-file-earmark"></i> : <i className="bi bi-folder"></i>;

    
    const {setPreviewFile} = useContext(PreviewFileContext)

    const handleClick = () => {
        if(!isFile){
            setCollapsed(!collapsed)
            return;
        }
        
        const path = node.path.split('gpm-server\\public')[1]
        axios.get(API+path).then((res) => {
            setPreviewFile(API+path)
        })
    }
    
    return (
        <div className='mt-2'>
            <span onClick={handleClick} role="button">
                {icon}
                {node.name}
            </span>
            <br />
            <div style={{display: collapsed ? "none" : "block", paddingLeft: 10}}>
                {hasChildren && node.children.map((child, index) => {
                    return (                        
                        <Tree key={index} node={child}/>                        
                    )
                })}
            </div>
        </div>
    )
}

export default Tree