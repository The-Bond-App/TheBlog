// Make sure it handles both Timestamp and string dates
const formatPostDate = (date) => {
  let dateObj;
  
  if (date && typeof date.toDate === 'function') {
    // It's a Firestore Timestamp
    dateObj = date.toDate();
  } else if (typeof date === 'string') {
    // It's already a string (ISO format)
    dateObj = new Date(date);
  } else if (date instanceof Date) {
    // It's already a Date object
    dateObj = date;
  } else {
    // Fallback to current date
    dateObj = new Date();
  }
  
  // Format the date
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default formatPostDate;