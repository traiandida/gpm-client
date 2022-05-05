import React, { createContext, useState } from "react";

export const PreviewFileContext = createContext({})

export const PreviewFileProvider = ({children}) => {
    const [previewFile, setPreviewFile] = useState(null)

    return (
        <PreviewFileContext.Provider value={{previewFile, setPreviewFile}}>
            {children}
        </PreviewFileContext.Provider>
    )
}