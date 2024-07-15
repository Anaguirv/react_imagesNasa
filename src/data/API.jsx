
export async function fetchNASAImages({ count, date, start_date, end_date, thumbs = false } = {}) {
    const apiKey = 'X0SU5sPPA2OSp2KA1A1sLdtBFu2EOPmwM0lxTjTR';
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    if (count) {
        url += `&count=${count}`;
    }
    if (date) {
        url += `&date=${date}`;
    }
    if (start_date && end_date) {
        url += `&start_date=${start_date}&end_date=${end_date}`;
    }
 
    if (thumbs) {
        url += `&thumbs=${thumbs}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
}
