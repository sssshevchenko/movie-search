import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../components/Navbar';

interface MainLayoutProps {
    title?: string;
    keywords?: string;
    description?: string;
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({children, title, keywords, description}) => {
    return (
        <>
            <Head>
                <title>{title || 'Movie Search'}</title>
                <meta name='description' content={'It is a Website where You can find any film. ' + description} />
                <meta name='robots' content='follow, index' />
                <meta name='keywords' content={keywords || 'Movies, films, search'} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <NavBar />   
            <Container className='mt-3'>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;