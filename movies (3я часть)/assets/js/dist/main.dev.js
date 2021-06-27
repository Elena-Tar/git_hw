"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var MY_API_KEY = '81c3d339';
var app = Vue.createApp({
  data: function data() {
    return {
      search: '',
      // result: { "Search": [{ "Title": "Batman v Superman: Dawn of Justice", "Year": "2016", "imdbID": "tt2975590", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "Superman Returns", "Year": "2006", "imdbID": "tt0348150", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" }, { "Title": "Superman", "Year": "1978", "imdbID": "tt0078346", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" }, { "Title": "Superman II", "Year": "1980", "imdbID": "tt0081573", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" }, { "Title": "Superman III", "Year": "1983", "imdbID": "tt0086393", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg" }, { "Title": "Superman IV: The Quest for Peace", "Year": "1987", "imdbID": "tt0094074", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg" }, { "Title": "Superman/Batman: Apocalypse", "Year": "2010", "imdbID": "tt1673430", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" }, { "Title": "Superman/Batman: Public Enemies", "Year": "2009", "imdbID": "tt1398941", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" }, { "Title": "Lois & Clark: The New Adventures of Superman", "Year": "1993–1997", "imdbID": "tt0106057", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg" }, { "Title": "Superman: Doomsday", "Year": "2007", "imdbID": "tt0934706", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMmJhN2RmMTUtMDMzMy00YTQ4LWEyZDMtOGM1NWVmMDE3NTBjXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg" }], "totalResults": "256", "Response": "True" },
      result: {
        "totalResults": 0
      },
      details: {},
      // details: { "Title": "Superman Returns", "Year": "2006", "Rated": "PG-13", "Released": "28 Jun 2006", "Runtime": "154 min", "Genre": "Action, Sci-Fi", "Director": "Bryan Singer", "Writer": "Michael Dougherty (screenplay), Dan Harris (screenplay), Bryan Singer (story), Michael Dougherty (story), Dan Harris (story), Jerry Siegel (characters), Joe Shuster (characters)", "Actors": "Brandon Routh, Kate Bosworth, Kevin Spacey, James Marsden", "Plot": "Following a mysterious absence of several years, the Man of Steel comes back to Earth in the epic action-adventure Superman Returns, a soaring new chapter in the saga of one of the world's most beloved superheroes. While an old enemy plots to render him powerless once and for all, Superman faces the heartbreaking realization that the woman he loves, Lois Lane, has moved on with her life. Or has she? Superman's bittersweet return challenges him to bridge the distance between them while finding a place in a society that has learned to survive without him. In an attempt to protect the world he loves from cataclysmic destruction, Superman embarks on an epic journey of redemption that takes him from the depths of the ocean to the far reaches of outer space.", "Language": "English, German, French", "Country": "USA, Australia", "Awards": "Nominated for 1 Oscar. Another 12 wins & 46 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "6.0/10" }, { "Source": "Rotten Tomatoes", "Value": "75%" }, { "Source": "Metacritic", "Value": "72/100" }], "Metascore": "72", "imdbRating": "6.0", "imdbVotes": "273,183", "imdbID": "tt0348150", "Type": "movie", "DVD": "02 Aug 2008", "BoxOffice": "$200,081,192", "Production": "Warner Bros.", "Website": "N/A", "Response": "True" },
      showModal: false,
      type: '',
      year: '',
      fav_list: [],
      showPanel: false,
      fav_icon: "☆",
      page: 1,
      rowView: false,
      search_history: [],
      darkTheme: false
    };
  },
  created: function created() {
    this.fav_list = localStorage.getItem("fav_movie") != null ? JSON.parse(localStorage.getItem("fav_movie")) : []; //localStorage.getItem("fav_movie") возвращает строку json из local storage

    this.search_history = localStorage.getItem("history") != null ? JSON.parse(localStorage.getItem("history")) : []; //localStorage.getItem("fav_movie") возвращает строку json из local storage

    if (localStorage.getItem('view') != null) {
      this.rowView = localStorage.getItem('view') === 'true';
    }

    if (localStorage.getItem('theme') != null) {
      this.darkTheme = localStorage.getItem('theme') === 'true';
    }
  },
  methods: {
    searchMovie: function searchMovie(e) {
      var _this = this;

      e.preventDefault();

      if (this.search !== "") {
        if (this.search_history.indexOf(this.search.toLowerCase()) === -1) {
          if (this.search_history.length == 10) {
            this.search_history.pop();
          }

          this.search_history.unshift(this.search.toLowerCase());
          localStorage.setItem('history', JSON.stringify(this.search_history));
        }

        this.page = 1;
        axios.get('http://www.omdbapi.com/?apikey=' + MY_API_KEY + '&s=' + this.search + '&type=' + this.type + '&y=' + this.year + '&page=' + this.page).then(function (resp) {
          console.log(resp);
          _this.result = resp.data;
          console.log(_this.result);
        });
      } else {
        console.warn('Enter search request');
      }
    },
    goToPage: function goToPage(new_page) {
      var _this2 = this;

      this.page = new_page;
      axios.get('http://www.omdbapi.com/?apikey=' + MY_API_KEY + '&s=' + this.search + '&type=' + this.type + '&y=' + this.year + '&page=' + this.page).then(function (resp) {
        console.log(resp);
        _this2.result = resp.data;
        console.log(_this2.result);
      });
    },
    moreInfo: function moreInfo(imdbID) {
      var _this3 = this;

      axios.get('http://www.omdbapi.com/?apikey=' + MY_API_KEY + '&i=' + imdbID + '&plot=full').then(function (resp) {
        console.log(resp);
        _this3.details = resp.data; // this.details.resp.data;

        _this3.showModal = true;
      }); // this.showModal = true;
    },
    toggleFav: function toggleFav(imdbID) {
      if (this.fav_list.length != 0) {
        var ind = this.fav_list.findIndex(function (el) {
          return el.imdbID === imdbID;
        });

        if (ind != -1) {
          this.fav_list.splice(ind, 1);
        } else {
          var favItem = this.result.Search.find(function (el) {
            return el.imdbID === imdbID;
          });
          this.fav_list.push(favItem);
        }
      } else {
        var _favItem = this.result.Search.find(function (el) {
          return el.imdbID === imdbID;
        });

        this.fav_list.push(_favItem);
      } // let favItem = this.result.Search.find((el) => el.imdbID === imdbID);
      // this.fav_list.push(favItem);
      // console.log(this.fav_list);


      localStorage.setItem("fav_movie", JSON.stringify(this.fav_list)); //fav_movie(придумали сами) JSON.stringify (команда чтобы массив преобразовать в строку) в откладке вкладка Application
    },
    closePanel: function closePanel() {
      this.showPanel = false;
    },
    changeView: function changeView(is_row) {
      this.rowView = is_row;
      localStorage.setItem('view', is_row);
    },
    clearSearch: function clearSearch() {
      this.search = "";
      this.result = {};
      type = '';
      year = '';
      page = 1;
    },
    clearHistory: function clearHistory() {
      this.search_history = [];
    },
    switchTheme: function switchTheme(is_dark) {
      this.darkTheme = is_dark; // localStorage.setItem('theme', (is_dark) ? 'dark' : 'white');

      localStorage.setItem('theme', is_dark);
    }
  }
});
app.component('movie-ratings', {
  props: ['ratings'],
  data: function data() {
    return {
      ratings_list: []
    };
  },
  watch: {
    ratings: function ratings(new_val) {
      this.ratings_list = _typeof(new_val) === "object" ? new_val : [];

      for (var i = 0; i < this.ratings_list.length; i++) {
        switch (this.ratings_list[i].Source) {
          case 'Internet Movie Database':
            this.ratings_list[i].Width = 100 - parseFloat(this.ratings_list[0].Value.split('/')[0]) * 10;
            break;

          case 'Rotten Tomatoes':
            this.ratings_list[i].Width = 100 - parseInt(this.ratings_list[i].Value);
            break;

          case 'Metacritic':
            this.ratings_list[i].Width = 100 - parseInt(this.ratings_list[i].Value.split('/')[0]);
        }
      }
    }
  },
  // template: `
  //     <div class="ratings_wrap">
  //         <div class="raiting_item" v-for="rating in this.ratings_list" :key="rating.Source">
  //             <div class="row">
  //                 <div class="col-8">{{ rating.Source }}</div>
  //                 <div class="col-4 text-end"> {{ rating.Value }}</div>
  //             </div>
  //             <div class="rating_scale">
  //                 <span :style=" 'width:'+ rating.Width+ '%;'"></span>
  //             </div>
  //         </div>
  //     </div>    
  // `
  template: '#ratings_list' //как себя проверить на синтаксические ошибки

}); //теперь здесь выводим наш заверстанный фев_лист
//fav_panel придумали название

app.component('fav_panel', {
  props: ['list', 'show'],
  methods: {
    moreInfo: function moreInfo(imdbID) {
      this.$parent.moreInfo(imdbID); //не работает
    },
    closePanel: function closePanel() {
      this.$parent.closePanel();
    },
    toggleFav: function toggleFav(imdbID) {
      this.$parent.toggleFav(imdbID);
    }
  },
  template: '#fav_panel'
});
app.component('pagination', {
  props: ['page', 'total_items'],
  data: function data() {
    return {
      total_pages: 1,
      per_page: 10,
      new_page: 1
    };
  },
  watch: {
    total_items: function total_items(new_val) {
      this.total_pages = Math.ceil(new_val / this.per_page);
    }
  },
  template: '#pagination',
  methods: {
    goToPage: function goToPage(num) {
      this.$parent.goToPage(num);
    },
    goToPrev: function goToPrev() {
      // this.new_page = (this.page - 1 !== 0) ? this.page - 1 : 0;
      // if (this.new_page === 0) {
      //     return false;
      // }
      // this.$parent.goToPage(this.new_page)
      this.$parent.goToPage(this.page - 1);
    },
    goToNext: function goToNext() {
      // this.new_page = (this.page + 1 !== this.total_pages) ? this.page + 1 : 0;
      // if (this.new_page === 0) {
      //     return false;
      // }
      // this.$parent.goToPage(this.new_page)
      this.$parent.goToPage(this.page + 1); //тоже самое 
    }
  }
});
app.mount("#app"); //★

/*anime*/

wow = new WOW({
  animateClass: 'animate__animated' // default

});
wow.init();