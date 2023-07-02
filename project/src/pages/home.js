import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [curMbti, setMbti] = useState('')

    return (
        <div style={styles.container}>
            <Link to={`/admin`} style={styles.adminLink}>관리자 페이지로 이동</Link>
            <p style={styles.paragraph}>MBTI 입력</p>
            <input type="text" value={curMbti} onChange={e => setMbti(e.target.value.toUpperCase())} style={styles.input} />
            <Link to={`/result`} state={{ mbti: curMbti }} style={styles.confirmButton}> 확인하러 가기</Link>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
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
    input: {
        margin: '10px 0',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    confirmButton: {
        padding: '10px 20px',
        color: '#fff',
        backgroundColor: '#3f51b5',
        textDecoration: 'none',
        borderRadius: '5px',
    }
};

export default Home;
