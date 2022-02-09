import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Lads', duration: '2:05' },
        { title: 'Blaaaa', duration: '1:45' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});