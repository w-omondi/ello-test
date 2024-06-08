import React from 'react';
import "./page-content.css"

interface IPageContentProps {
    children: React.ReactNode
}

export default function PageContent(props: IPageContentProps) {
    return (
        <div className={"page-content"}>
            {props.children}
        </div>
    );
}