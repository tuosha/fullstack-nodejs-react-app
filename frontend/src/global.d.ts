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