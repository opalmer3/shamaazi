// Parameter 1: donation amount {number}
// Parameter 2: Split method {string}
function calculateDonationSchedule(totalDonation=0, method=''){
    // Only allow numberical input > 0 for total donation
    if (typeof totalDonation !== 'number' || totalDonation <= 0) { return new Array(10).fill('-'); }

    if (method === 'equal'){
        // Round daily donation down to nearest 2 decimal places
        const dailyDonation = Math.floor(((totalDonation / 10) * 100)) / 100 ;

        // Add the daily donation for the first 9 days
        const equalSchedule = new Array(9).fill(dailyDonation.toFixed(2));

        // Add the leftover for the 10th day. Each number multiplied by 100 then divided to avoid floating point precision error
        equalSchedule.push(((totalDonation * 100 - dailyDonation * 9 * 100) / 100).toFixed(2));
        
        return equalSchedule;
    } 

    if (method === 'double odd'){
        const doubleOddSchedule = [];
        // even days 1/3 of total donation, odd days 2/3 of total donation. 5 even days 5 odd days.  
        const evenDay = Math.floor((totalDonation / 3 / 5) * 100) / 100;
        const oddDay = Math.floor((totalDonation * 2 / 3 / 5) * 100) / 100;

        // Add first 9 days payments
        for(let i = 0; i < 9; i++){
            doubleOddSchedule.push( (i + 1) % 2 === 0 ? evenDay.toFixed(2) : oddDay.toFixed(2) )
        }

        // Add leftover after 5 odd day and 4 even day payments
        doubleOddSchedule.push((((totalDonation - oddDay * 5 - evenDay * 4) * 100) / 100).toFixed(2));

        return doubleOddSchedule;
    }

    // return array of - if method input invalid
    return new Array(10).fill('-');
}

export {calculateDonationSchedule};