import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
       {
           id: '1',
           name: 'Young Ju',
           company: 'Good Company',
           theme: 'dark',
           title: 'Software Engineer',
           email: 'younggu@gmail.com',
           message: 'go for it',
           fileName: 'young',
           fileURL:null
        } ,
        {
            id: '2',
            name: 'Nyan Dol',
            company: 'My heart',
            theme: 'colorful',
            title: 'Cute Cat',
            email: 'catheaven@gmail.com',
            message: 'Love!',
            fileName: 'nyandol',
            fileURL:null
        } ,
        {
            id: '3',
            name: 'AKIRA',
            company: 'OTOMO',
            theme: 'light',
            title: 'Animation',
            email: 'akira@gmail.com',
            message: 'regend',
            fileName: 'akira',
            fileURL:null
        } 
    ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push("/");
            }
        })
    })
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
};

export default Maker;