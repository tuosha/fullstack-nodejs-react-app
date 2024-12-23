declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classnames: IClassNames
    export = classnames
}
declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }

    const classnames: IClassNames
    export = classnames
}
declare module '*.less' {
    const resource: { [key: string]: string }
    export = resource
}
declare module "*.svg" {
    import React from 'react'
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare const __IS_DEV : boolean
declare const __TWO : string
