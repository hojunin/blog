import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className=" bg-white dark:bg-indigo-900">
            <Header />
            <div className="h-full max-w-screen-xl m-auto">{children}</div>
            <Footer />
        </div>
    );
};

export default AppLayout;
