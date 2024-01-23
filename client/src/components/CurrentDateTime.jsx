import React, { useState, useEffect } from 'react';

function CurrentDateTime() {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const today = new Date();

        const options = {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'Asia/Manila'
        };

        const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(today);

        setCurrentDateTime(`as of ${formattedDateTime}`);
    }, []);

    return (
        <p>
            {currentDateTime}
        </p>
    );
}

export default CurrentDateTime;
