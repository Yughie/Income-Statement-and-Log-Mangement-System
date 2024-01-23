import React, { useState, useEffect } from 'react';

function CurrentDate() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // FUnction to format the date as 'Month day, Year'
        const formatDate = (date) => {
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        };

        // Get the current date
        const today = new Date();

        // Format the current date
        setCurrentDate(formatDate(today));
    }, []);


    return (
        <div>
            for {currentDate}
        </div>
    );
}

export default CurrentDate;