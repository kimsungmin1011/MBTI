import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [curMbti, setMbti] = useState('')
    const [curInfo, setInfo] = useState('')
    const navigate = useNavigate();

    const postMbti = () => {
        axios.post('http://localhost:8080/mbti/', { mbti: curMbti, info: curInfo })
            .then(res => {
                console.log(res)
                alert("MBTI 업데이트 성공! 홈으로 이동합니다"); // 요청이 성공하면 alert창 표시
                navigate('/'); // home.js로 리디렉션
            }).catch(err => {
                console.log(err)
                alert("업데이트 실패");
            })
    }

    return (
        <div style={styles.container}>
            <p style={styles.paragraph}>MBTI 입력</p>
            <input type="text" value={curMbti} onChange={e => setMbti(e.target.value.toUpperCase())} style={styles.input} />
            <p style={styles.paragraph}>특징 입력</p>
            <input type="text" value={curInfo} onChange={e => setInfo(e.target.value)} style={styles.input} />
            <button onClick={() => postMbti(curMbti)} style={styles.postButton}>POST</button>
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
    postButton: {
        padding: '10px 20px',
        color: '#fff',
        backgroundColor: '#3f51b5',
        borderRadius: '5px',
    }
};

export default Admin;
