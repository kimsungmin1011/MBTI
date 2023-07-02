import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [mbti, setMbti] = useState({
        ei: '',
        sn: '',
        tf: '',
        jp: '',
    });

    const handleClick = (type, value) => {
        setMbti(prev => ({
            ...prev,
            [type]: value,
        }));
    };

    const mbtiOptions = {
        ei: ['E', 'I'],
        sn: ['S', 'N'],
        tf: ['T', 'F'],
        jp: ['J', 'P'],
    };

    return (
        <div style={styles.container}>
            <Link to={`/admin`} style={styles.adminLink}>관리자 페이지로 이동</Link>
            <p style={styles.paragraph}>MBTI 입력</p>
            {Object.keys(mbtiOptions).map(type => (
                <div key={type}>
                    {mbtiOptions[type].map(value => (
                        <button
                            key={value}
                            onClick={() => handleClick(type, value)}
                            style={
                                mbti[type] === value
                                    ? styles.buttonClicked
                                    : styles.button
                            }
                        >
                            {value}
                        </button>
                    ))}
                </div>
            ))}
            <Link to={`/result`} state={{ mbti: mbti.ei + mbti.sn + mbti.tf + mbti.jp }} style={styles.confirmButton}> 확인하러 가기</Link>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    adminLink: {
        marginBottom: '20px',
        color: '#fff',
        backgroundColor: '#3f51b5',
        textDecoration: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
    },
    paragraph: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    button: {
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        color: '#fff',
        backgroundColor: '#000',
    },
    buttonClicked: {
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        color: '#fff',
        backgroundColor: '#ffa500',
    },
    confirmButton: {
        padding: '10px 20px',
        color: '#fff',
        backgroundColor: '#3f51b5',
        textDecoration: 'none',
        borderRadius: '5px',
    },
};

export default Home;
