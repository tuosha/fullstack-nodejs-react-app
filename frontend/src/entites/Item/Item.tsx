// import { FC, ReactElement, ReactNode } from 'react'
//
// interface ItemProps {
//     item: object
//     ItemType: ReactElement
// }
//
// const Item: FC<ItemProps> = ({ children, item }: ItemProps) => {
//     return (
//         { children }
//     )
// }
// const Item: FC<ItemProps> = ({ item, ItemType }) => {
//     const res = <ItemType item={item}/>
//     const record = !Object(item).keys ? (
//         <>
//             {Object.entries(item).map(([key, val]) => (
//                 <span>
//                     {key} :: {val}
//                 </span>
//             ))}
//         </>
//     ) : (
//         <span>Element data is empty!</span>
//     )
//     return (
//         <>
//             {record}
//         </>
//     )
// }
//
// export default Item
