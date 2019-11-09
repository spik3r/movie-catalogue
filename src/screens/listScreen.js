import React from "react";
import HeroBanner from "../components/heroBanner";
import SearchBar from "../components/searchBar";
import MovieCards from "../components/movieCards";
import Modal from "../components/Modal";

const ListScreen = () => <div className="list-container">
    <HeroBanner/>
    <SearchBar/>
    <MovieCards/>
</div>;

export default ListScreen;
