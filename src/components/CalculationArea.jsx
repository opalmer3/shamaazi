import React, { useEffect, useState } from 'react';
import DonationInputs from './DonationInputs';
import DonationSchedule from './DonationSchedule';
import {calculateDonationSchedule} from '../helpers';

import './CalculationArea.css';

function CalculationArea(){
    const [amount, setAmount] = useState(100);
    const [split, setSplit] = useState('equal');
    const [donationSchedule, setDonationSchedule] = useState([]);

    // Changes amount state
    function handleAmountChange(event){
        const {value} = event.target;

        // Dont allow values with more than 2 decimal places or less than 0 
        if(value >= 0 && (!(value.includes('.')) || value.split('.')[1].length <= 2)){
            setAmount(Number(value));
        }
    }

    // Changes split method state
    function handleSplitChange(event){
        const {value} = event.target;
        setSplit(value);
    }

    // Calculate the donation schedule on mount and when amount or split state changes
    useEffect(()=>{
       setDonationSchedule(calculateDonationSchedule(amount, split));
    }, [amount, split]);

    return <div className='calculation-area'>

                    <DonationInputs 
                        amount={amount}
                        split={split}
                        handleAmountChange={handleAmountChange}
                        handleSplitChange={handleSplitChange}
                    />

                    <DonationSchedule donationSchedule={donationSchedule} />

           </div>
}

export default CalculationArea;