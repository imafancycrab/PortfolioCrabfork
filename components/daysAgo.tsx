import React from 'react';

const DateCalc = () => {
    const dateStrings = [
       '2020-07-15',
       '2022-11-15',
       '2022-02-14',
       '2022-07-09',
       '2022-08-18',
       '2022-10-15',
       '2022-12-22',
       '2023-01-09',
       '2023-04-09',
       '2023-06-09'
    ]
    
    const calculateTimePassed = (dateString: string) => {
        const inputDate = new Date(dateString);
        const currentDate = new Date();
        const timePassedInMilliseconds = currentDate.getTime() - inputDate.getTime();
      
        const daysPassed = Math.floor(timePassedInMilliseconds / (1000 * 60 * 60 * 24));
        const yearsPassed = Math.floor(daysPassed / 365);
      
        return { daysPassed, yearsPassed };
      };

    return (
        <>
            
        </>
    );
}
 
export default DateCalc;