import React, { HtmlHTMLAttributes } from "react";

interface CarModel {}

interface ModelsContext {
    wrapperRef:  React.RefObject<HTMLElement>
    registeredModels: CarModel[]
    registerModel:(model: CarModel) => void
    unregisterModel: (modelNAme: string) => void
    getModelByName: (modelName: string) => CarModel | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)