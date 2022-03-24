import React from 'react';
import { Link } from 'react-router-dom';


// import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';
import Button from '../components/button/Button';
import { category, movieType, tvType } from '../api/tmdbApi';

import HeroSlide from '../components/hero-slide/HeroSlide';


const Home = () => {
    return (
        <>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h1>Trending Movies</h1>
                        <Link to="/movie">
                            {/* <OutlineButton className="small">View more</OutlineButton> */}
                            <Button>View More</Button>
                            
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h1>Top Rated Movies</h1>
                        <Link to="/movie">
                          <Button>View More</Button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>
                

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h1>Trending TV</h1>
                        <Link to="/tv">
                          <Button>View More</Button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>


                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h1>Top Rated TV</h1>
                        <Link to="/tv">
                        <Button>View More</Button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    );
}

export default Home;