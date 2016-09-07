/************
 * DATABASE *
 ************/

var db = require('../models');

/* hard-coded data */
// var albums = [];
// albums.push({
//               _id: 132,
//               artistName: 'Nine Inch Nails',
//               name: 'The Downward Spiral',
//               releaseDate: '1994, March 8',
//               genres: [ 'industrial', 'industrial metal' ]
//             });
// albums.push({
//               _id: 133,
//               artistName: 'Metallica',
//               name: 'Metallica',
//               releaseDate: '1991, August 12',
//               genres: [ 'heavy metal' ]
//             });
// albums.push({
//               _id: 134,
//               artistName: 'The Prodigy',
//               name: 'Music for the Jilted Generation',
//               releaseDate: '1994, July 4',
//               genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
//             });
// albums.push({
//               _id: 135,
//               artistName: 'Johnny Cash',
//               name: 'Unchained',
//               releaseDate: '1996, November 5',
//               genres: [ 'country', 'rock' ]
//             });


// GET /api/albums
function index(req, res) {
  // send all books as JSON response
//   console.log('books index');
//   res.json(albums);
// }
  db.Album.find({}, function(err, allAlbums) {
    res.json(allAlbums);
  });
}

function create(req, res) {
  var genres = req.body.genres.split(',').map(function(item) {
    return item.trim();
  });

  req.body.genres = genres;
  db.Album.create(req.body, function(err, album) {
    if(err) {
      console.log(err);
    }
    res.json(album);
  });
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
