import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Result() {
    const location = useLocation();
    const curMbti = location.state.mbti;
    const [curWhat, setWhat] = useState('')

    const getMbti = () => {
        axios.get(`http://localhost:8080/mbti/${curMbti}`)
            .then(res => {
                console.log(res)
                setWhat(res.data[0].info)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div style={styles.container}>
            <button onClick={() => getMbti()} style={styles.getButton}>GET 요청</button>
            <p style={styles.mbtiParagraph}>{curMbti}는...</p>
            <p style={styles.infoParagraph}>{curWhat}</p>
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
        backgroundColor: '#f5f5f5',
    },
    getButton: {
        padding: '10px 20px',
        color: '#fff',
        backgroundColor: '#3f51b5',
        borderRadius: '5px',
        marginBottom: '20px',
    },
    mbtiParagraph: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    infoParagraph: {
        marginTop: '20px',
        fontSize: '16px',
    }
};

export default Result;
