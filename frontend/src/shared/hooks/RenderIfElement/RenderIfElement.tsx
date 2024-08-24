import React, {FC, ReactElement} from 'react';

interface Props {
    children: ReactElement | string,
    isTrue?: boolean,
    isFalse?: boolean
}

const RenderIfElement: FC<Props> = ({children, isTrue = true, isFalse = false}) => {
    if (isTrue) return <>{children}</>
    if (!isFalse) return <>{children}</>
    return null
};

export default RenderIfElement;