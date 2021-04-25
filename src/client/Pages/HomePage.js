import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// import {useContext} from 'react';
// import { myContext } from '../Context';


const HomePage = () => {


const [depositData, setDepositData] = useState([])
const [userData, setUserData] = useState([])
// const [trans, setTrans] = useState([])
// const getApiData= async()=>{
//     const data = await axios.get('http://localhost:5000/bank/users/allUsers')    
//     setArrivingData(data.data)
// let url = `http://localhost:5000/bank/accounts/${trans}/`
//     console.log(data.data);
// }
//     useEffect(()=>{getApiData()},[]);

    const deposit = async () => {
		try { 
            const url = `http://localhost:5000/bank/accounts/deposit/`;
			const data  = await axios.patch(url, { amount: 300 });
            console.log(data.data);
            setDepositData(data.data)
            console.log(depositData);
		} catch (error) {
			console.log(error);
		}
	};
    
    useEffect(()=>{deposit()},[]);

    const addAccount = async () => {
		try { 
            const url = `http://localhost:5000/bank/accounts/addAccount/`;
			const data  = await axios.post(url, { accountName: "personal", accountNumber: 3, userIdNumber: 3  });
            console.log(data.data);
            setUserData(data.data)
            console.log(userData);
		} catch (error) {
			console.log(error);
		}
	};
    
    useEffect(()=>{addAccount()},[]);

    
    
    return (   

    
        <div >
            <div className="App">
            <header className="App-header">
                <h2>welcome to</h2>
                <h1>bank manager</h1>
                <span>
                <button type="button" className="button" onClick={addAccount} >add Account</button>
                <button type="button" className="button" onClick={deposit}> deposit</button>
                </span> 


                 
                {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >get in </a> */}
            </header>
            <div>
               
            </div>
                
            </div>
        </div>    
        );
};


export default HomePage;




