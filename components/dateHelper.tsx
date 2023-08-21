export const calculateTimePassed = (dateString: string) => {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    const timePassedInMilliseconds = currentDate.getTime() - inputDate.getTime();
  
    const daysPassed = Math.floor(timePassedInMilliseconds / (1000 * 60 * 60 * 24));
    const yearsPassed = Math.floor(daysPassed / 365);
  
    return { daysPassed, yearsPassed };
  };
  