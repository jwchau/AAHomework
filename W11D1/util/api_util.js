export const fetchSearchGiphys = (query) => (
    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=To93X70r9W5ZPM5T8fC0DnG4ey9ctRwE&limit=2`
    })
);

//giphy api key: To93X70r9W5ZPM5T8fC0DnG4ey9ctRwE