/* index.js
    author: Mary Montgomery
    date: 31 March 2020
*/
/*  musicSelection
    a function to find out what music button was pressed
    (and send that information to another function that makes
        the api call to spotify?)
    once one button is pressed the click features are disabled 
    from the other buttons, and the clicked button will change color.
    @params
        button_id: the id of the button that was pressed
    @returns
        user_music_selection: the needed spotify term for what music 
                            was selected
*/ 
function musicSelection(button_id) {
    /*  get the button, and change the color to show selection */
    let selected_button = document.getElementById(button_id);
    selected_button.style.background = "black";
    selected_button.style.color = "#cfe8fa";
    
    /* make the other buttons unable to be clicked */
    if (button_id == "artist-music-button" || 
        button_id == "song-music-button" ||
        button_id == "album-music-button" ) {
        document.getElementById("genre-music-button").onclick = null;
    }
    if (button_id == "artist-music-button" || 
        button_id == "song-music-button" ||
        button_id == "genre-music-button" ) {
        document.getElementById("album-music-button").onclick = null;
    }
    if (button_id == "artist-music-button" || 
        button_id == "album-music-button" ||
        button_id == "genre-music-button" ) {
        document.getElementById("song-music-button").onclick = null;
    }
    if (button_id == "song-music-button" || 
        button_id == "album-music-button" ||
        button_id == "genre-music-button" ) {
        document.getElementById("artist-music-button").onclick = null;
    }

    /*  button_id looks like artist-music-button    */
    let selection_arr = button_id.split("-");
    console.log(selection_arr);
    /*  user_music_selection is just one word: artist, song, album, or genre */
    user_music_selection = selection_arr[0];
    console.log(user_music_selection);

    /* will need to return this information to send it somewhere */
}


/*  timeSelection
    a function to find out what time span button was pressed
    (and sends the information to another function that will make
        the spotify api call)
    once one button is clicked, the others will not have a click 
    feature and the clicked button will change color.
    @params
        button_id: the id of the clicked button
    @returns
        user_time_selection: the needed spotify term for the time
                            span the user selected
*/
function timeSelection(button_id) {
    /* get the button and change the color to show it is selected */
    let selected_button = document.getElementById(button_id);
    selected_button.style.background = "black";
    selected_button.style.color = "#cfe8fa";

    /* make sure the other buttons cannot be selected */
    if (button_id == "short-term-time-button" ||
        button_id == "medium-term-time-button") {
        document.getElementById("long-term-time-button").onclick = null;
    }
    if (button_id == "short-term-time-button" ||
        button_id == "long-term-time-button") {
        document.getElementById("medium-term-time-button").onclick = null;
    }
    if (button_id == "medium-term-time-button" ||
        button_id == "long-term-time-button") {
        document.getElementById("short-term-time-button").onclick = null;
    }

    /*  button_id looks like short-term-time-button    */
    let selection_arr = button_id.split("-");
    console.log(selection_arr);
    /*  user_time_selection is just one word: short, medium, or long */
    user_time_selection = selection_arr[0];
    console.log(user_time_selection);

    /*will need to return this information to send it somewhere*/
}