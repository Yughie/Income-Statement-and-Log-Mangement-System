import React, { useState, useEffect } from 'react';

function CurrentMonth() {
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const today = new Date();

        const options = { month: 'long', timeZone: 'Asia/Manila' };
        const formattedMonth = new Intl.DateTimeFormat('en-US', options).format(today);

        setCurrentMonth(`Monthly Income Statement of ${formattedMonth}`);
    }, []);

    return (
        <div>
            {currentMonth}
        </div>
    );
}

export default CurrentMonth;
