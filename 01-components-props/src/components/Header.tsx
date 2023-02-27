import React from "react";

type HeaderPropsType = {
    title: string
}

export const Header = (props: HeaderPropsType) => {
    const {title} = props;
    return (
        <div>{title}</div>
    )
}
