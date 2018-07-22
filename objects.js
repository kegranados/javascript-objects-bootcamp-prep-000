var playlist = { artistName : songTitle};

function updatePlaylist(playlist,artistName,songTitle){
  playlist.artistName = songTitle
}
function removeFromPlaylist(playlist, songTitle){
  delete playlist.artistName
  return playlist
}
