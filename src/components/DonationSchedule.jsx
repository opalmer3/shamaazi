import React from 'react';
import './DonationSchedule.css';

function DonationSchedule({donationSchedule}){
    
    return <div className="donationSchedule">
                
                {donationSchedule.map((amount, index) => 
                    <span key={index} className='donation-info'>
                        
                            <div className='day'>
                                {`Day ${index + 1}`}
                            </div>
                        
                            <div className='amount'>
                                {`$ ${amount}`}
                            </div>
                        
                    </span>)}
                    
            </div>
}

export default DonationSchedule;