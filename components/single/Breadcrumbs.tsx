import React from 'react'

type Props = {
    name: string
}


function Breadcrumbs({ name }: Props) {
    return (
        <div className="services-breadcrumb">
            <div className="agile_inner_breadcrumb">
                <div className="container">
                    <ul className="w3_short">
                        <li>
                            <a href="index.html">Home</a>
                            <i>|</i>
                        </li>
                        <li>{name}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs