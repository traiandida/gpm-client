import React, { useState } from 'react'
import axios from 'axios';
import "./Tree.css"
import { API } from '../../constants';

function Tree({node}) {
    
    const [collapsed, setCollapsed] = useState(false);
    const hasChildren = node.children ? true : false;
    const isFile = node.type === 'file' ? true : false;
    const icon = isFile ? <i className="bi bi-file-earmark"></i> : <i className="bi bi-folder"></i>;

    const HandleClick = (ev) => {
        if(!isFile){
            setCollapsed(!collapsed)
            return;
        }
        
        const path = node.path.split('gpm-server\\public')[1]

        axios.get(API+path).then((res) => {
            console.log(res)
        })

       
        
    }
    

    return (
        <div className='mt-2'>
            <span onClick={HandleClick} role="button">
                {icon}
                {node.name}
            </span>
            <br />
            <div style={{display: collapsed ? "block" : "none", paddingLeft: 10}}>
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