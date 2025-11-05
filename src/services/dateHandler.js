const formatPostDate = (dateInput) => {
    if (!dateInput) return "";
    
    try {
        let date;
        
        // Check if it's a Firestore Timestamp object
        if (typeof dateInput.toDate === 'function') {
            date = dateInput.toDate();
        } 
        // Check if it's a string that needs parsing
        else if (typeof dateInput === 'string') {
            // Handle Firestore string format if present
            if (dateInput.includes(" at ")) {
                const cleanedString = dateInput.replace(" at ", " ").replace(/ UTC[+-]\d+/, "");
                date = new Date(cleanedString);
                
                // Fallback to original string if parsing fails
                if (isNaN(date.getTime())) {
                    date = new Date(dateInput);
                }
            } else {
                date = new Date(dateInput);
            }
        }
        // Assume it's a Date object or timestamp number
        else {
            date = new Date(dateInput);
        }
        
        // If we still have an invalid date, return empty string
        if (isNaN(date.getTime())) {
            return "";
        }
        
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    } catch (error) {
        console.error("Invalid date format", error);
        return "";
    }
};

export default formatPostDate;