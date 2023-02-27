import React from "react";

type BodyPropsType = {
    title: string
}

export const Body = (props: BodyPropsType) => {
    const {title} = props;
    return (
        <div>{title}</div>
    )
}
