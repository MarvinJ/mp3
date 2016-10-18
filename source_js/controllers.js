/* Sample Controller */
/**
 * Created by marvin on 10/16/16.
 */


// define the controller and staff
app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    // read json file and assign it to the json
    $scope.reverse = false;
    $http.get('./data/imdb250.json')
        .success(function(response) {
            // response is an json array here
            $scope.movies = [];
            for(var i=0; i<response.length;i++){
                var temp_movie = new movie(response[i].title, response[i].rank, response[i].imdbID,
                    response[i].genre, response[i].awards, response[i].released, response[i].runtime, response[i].plot);
                $scope.movies.push(temp_movie);
            }
            $scope.options = ['title', 'rank'];
            $scope.ranks = $scope.options[0];
        })
        //$scope.options= ['title', 'rank'];
        .error(function(err){
            console.log(err);
        });

} ]);



app.controller('GalleryController', ['$scope', '$http', function($scope, $http) {
    // read json file and assign it to the json
    $http.get('./data/imdb250.json')
        .success(function(response) {
            // response is an json array here
            $scope.movies = [];
            var arr = [];
            for(var i=0; i<response.length;i++) {
                var temp_movie = new movie(response[i].title, response[i].rank, response[i].imdbID,
                response[i].genre, response[i].awards, response[i].released, response[i].runtime, response[i].plot);
                $scope.movies.push(temp_movie);
                for(var j=0;j< response[i].genre.length;j++){
                    var str = response[i].genre[j];
                    arr.push(str);
                }
            }
            //console.log("god zhang");
            $scope.genres = arr.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
            $scope.myFunc = function(genre){
                //console.log("god qi");
                //console.log(genre);
                $scope.current_movie = [];
                //console.log($scope.movies.length)
                for(var i=0;i<$scope.movies.length;i++){
                    if($scope.movies[i].genre.includes(genre)){

                        $scope.current_movie.push($scope.movies[i]);
                    }
                }
                //console.log($scope.current_movie.length)
            };

        })
        //$scope.options= ['title', 'rank'];
        .error(function(err){
            console.log(err);
        });

} ]);

//define the controller and staff
app.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
    // read json file and assign it to the json
    console.log("detail is qi");
    $scope.temp = "hello";
    $http.get('./data/imdb250.json')
        .success(function(response) {
            // response is an json array here
            $scope.movies = [];
            for(var i=0; i<response.length;i++){
                var temp_movie = new movie(response[i].title, response[i].rank, response[i].imdbID,
                    response[i].genre, response[i].awards, response[i].released, response[i].runtime, response[i].plot);
                $scope.movies.push(temp_movie);
            }
            // find our target movie
            console.log($scope.movies.length);
            var rank = $routeParams.rank;
            for(var j=0;j<$scope.movies.length;j++){
                if($scope.movies[j].rank==rank)
                    $scope.curr_movie = $scope.movies[j];
            }
            $scope.rank = parseInt(rank);

        })
        //$scope.options= ['title', 'rank'];
        .error(function(err){
            console.log(err);
        });

} ]);


function check_rank(temp_movie, rank){
    return temp_movie.rank==rank;
}


function check(temp_movie, genre) {
    return temp_movie.genre==genre;
}


// constructor for the function here

function movie(title, rank, imdbid, genre, awards, released, runtime, plot){
    this.title = title;
    this.rank = rank;
    this.imdbid = imdbid;
    this.genre = genre;
    this.awards= awards;
    this.released = released;
    this.runtime = runtime;
    this.plot = plot;
}


