import React from "react";

type FooterPropsType = {
    title: string
}

export const Footer = (props:FooterPropsType) => {
    const {title} = props;
    return (
        <div>{title}</div>
    )
}
