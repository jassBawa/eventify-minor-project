
export const formatDate = (d) => {


    const date = new Date(d); // Get current date
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }; // Define format options

    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;       // Output: May 8, 2023
}
