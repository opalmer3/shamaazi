import React from 'react';
import './DonationInputs.css';


function DonationInputs({amount, split, handleAmountChange, handleSplitChange}){

    return <div className='donation-inputs'>
                
                <label className='donation-amount'> Donation $
                    <input onChange={handleAmountChange} 
                        className='amount-input'
                        value={amount}
                        type='number' 
                        min='0.01' 
                        max='1000000'
                        step='0.01'>
                    </input>
                </label>

                    <label className='payment-method'>
                        <input onChange={handleSplitChange}
                            type='radio' 
                            name='split' 
                            value='equal' 
                            checked={split === 'equal'}>
                        </input>
                        Pay equal amounts on each day
                    </label>

                    <label className='payment-method'>
                        <input onChange={handleSplitChange}
                            type='radio' 
                            name='split' 
                            value='double odd'
                            checked={split === 'double odd'}>
                        </input>
                        Pay double on odd days
                    </label>
            </div>
}

export default DonationInputs;