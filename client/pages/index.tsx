import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import Footer from '../components/app/Footer';
import Header from '../components/app/Header';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = false;

const Home: NextPage = () => {
    return (
        <div className="flex-1">
            <Header />
            <Footer />
        </div>
    );
};

export default Home;
