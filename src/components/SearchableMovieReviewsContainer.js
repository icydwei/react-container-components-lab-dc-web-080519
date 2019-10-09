import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '&api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ""
    }

  }

  fetchReviews = (event) => {
    event.preventDefault()
    // if (this.state.searchTerm.length > 0){
    fetch(URL + `${this.state.searchTerm}` + NYT_API_KEY)
    .then(response => response.json())
    .then(movReviews => {
      this.setState({
        reviews: movReviews.results
      })
    })
    // }
    // else {
    //   alert("Please enter a search term!")
    // }
  }

  setSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <div><b>SEARCH FOR REVIEWS</b>
        <form onSubmit={this.fetchReviews}>
          <input type="text" onChange={this.setSearch}></input>
          <input type="submit" value="Search"></input>
        </form>
        </div>

        <div className="searched-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>


      </div>



    )
  }


}
