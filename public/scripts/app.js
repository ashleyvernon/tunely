/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

/* hard-coded data! */
// var sampleAlbums = [];
// sampleAlbums.push({
//              artistName: 'Ladyhawke',
//              name: 'Ladyhawke',
//              releaseDate: '2008, November 18',
//              genres: [ 'new wave', 'indie rock', 'synth pop' ]
//            });
// sampleAlbums.push({
//              artistName: 'The Knife',
//              name: 'Silent Shout',
//              releaseDate: '2006, February 17',
//              genres: [ 'synth pop', 'electronica', 'experimental' ]
//            });
// sampleAlbums.push({
//              artistName: 'Juno Reactor',
//              name: 'Shango',
//              releaseDate: '2000, October 9',
//              genres: [ 'electronic', 'goa trance', 'tribal house' ]
//            });
// sampleAlbums.push({
//              artistName: 'Philip Wesley',
//              name: 'Dark Night of the Soul',
//              releaseDate: '2008, September 12',
//              genres: [ 'piano' ]
//            });
/* end of hard-coded data */


$(document).ready(function() {

  console.log('app.js loaded!');

  $.get('/api/albums').success(function(albums){
    albums.forEach(function(album) {
      renderAlbum(album);
    });
    console.log(albums);
  });

  $('#new-album-form').submit(function(event){
    event.preventDefault();

    var data = $('#new-album-form').serialize();
    $.post('/api/albums', data, function(album){
      renderAlbum(album);
    });
    $(this).trigger('reset');
  })

  $('#albums').on('click', '.add-song', function(e)
   {
    e.preventDefault();
    var id = $(this).closest('.album').data('album-id');
    $('#songModal').data('album-id', id);
    $('#songModal').modal();
  });


});


function renderAlbum(album) {
  // $album.empty();
  var source = $('#album-template').html();
  var albumsTemplate = Handlebars.compile(source);
  var html = albumsTemplate(album);
  $('#albums').prepend(html);
};

// this function takes a single album and renders it to the page

