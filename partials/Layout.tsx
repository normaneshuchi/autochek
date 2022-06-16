import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

type Props = {
    children: React.ReactNode
}

function Layout({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout