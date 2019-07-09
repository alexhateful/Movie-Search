import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { css } from 'glamor';

const Menu = (props) => {
    return (
        <div style={mainMenu}  className="hide-on-med-and-down">
            <div className="menuTitle">
                <h5 style={menuTitle}>-FILTERS-</h5>
            </div>
            <div className="menuRating" style={menuRating}>
                <p style={filterName}>Rating:</p>
                <div>From  <span style={rangeLabel}>{props.valRatingFrom}&nbsp;</span></div>
                <div>To  <span style={rangeLabel}>{props.valRatingTo}</span></div>
            </div>
            {props.trendMovie === true || props.trendTv === true || props.search === true || props.favorit === true ? 
            <div><Range min={0} max={10}
            disabled={true}
            defaultValue={[props.valRatingFrom, props.valRatingTo]}
            marks={{ 0: 0, 5: 5, 10: 10 }}
            step={0.2}
            onChange={(value) => props.filterRatingOn(value)} /></div> :
            <div><Range min={0} max={10}
            disabled={false}
            defaultValue={[props.valRatingFrom, props.valRatingTo]}
            marks={{ 0: 0, 5: 5, 10: 10 }}
            step={0.2}
            onChange={(value) => props.filterRatingOn(value)} />
            </div>}

            <div className="menuYear" style={menuYear}>
                <p style={filterName}>Year:</p>
                <div>From  <span style={rangeLabel}>{props.valYearFrom}&nbsp;</span></div>
                <div>To  <span style={rangeLabel}>{props.valYearTo}</span></div>
            </div>
            {props.trendMovie === true || props.trendTv === true || props.search === true || props.favorit === true ?
            <div><Range min={1900} max={2020}
            disabled={true}
            defaultValue={[props.valYearFrom, props.valYearTo]}
            marks={{ 1900: 1900, 1960: 1960, 2020: 2020 }}
            onChange={(value) => props.filterYearOn(value)} /></div> :
            <div><Range min={1900} max={2020}
            disabled={false}
            defaultValue={[props.valYearFrom, props.valYearTo]}
            marks={{ 1900: 1900, 1960: 1960, 2020: 2020 }}
            onChange={(value) => props.filterYearOn(value)} /></div>}
            
            <div className="menuGenres" style={{marginTop: "50px"}}>
                <h5 style={menuTitle}>-Genres-</h5>
                <div className="row">
                    <div className="col s6">
                    <a href="#anchor" className={`${genreLink}`} id="28" onClick={props.getGenre}>Action</a>
                    <a href="#anchor" className={`${genreLink}`} id="12" onClick={props.getGenre}>Adventure</a>
                    <a href="#anchor" className={`${genreLink}`} id="16" onClick={props.getGenre}>Animation</a>
                    <a href="#anchor" className={`${genreLink}`} id="35" onClick={props.getGenre}>Comedy</a>
                    <a href="#anchor" className={`${genreLink}`} id="80" onClick={props.getGenre}>Crime</a>
                    <a href="#anchor" className={`${genreLink}`} id="99" onClick={props.getGenre}>Documentary</a>
                    <a href="#anchor" className={`${genreLink}`} id="18" onClick={props.getGenre}>Drama</a>
                    <a href="#anchor" className={`${genreLink}`} id="10751" onClick={props.getGenre}>Family</a>
                    <a href="#anchor" className={`${genreLink}`} id="14" onClick={props.getGenre}>Fantasy</a>
                    </div>
                    <div className="col s6">
                    <a href="#anchor" className={`${genreLink}`} id="36" onClick={props.getGenre}>History</a>
                    <a href="#anchor" className={`${genreLink}`} id="27" onClick={props.getGenre}>Horror</a>
                    <a href="#anchor" className={`${genreLink}`} id="10402" onClick={props.getGenre}>Music</a>
                    <a href="#anchor" className={`${genreLink}`} id="9648" onClick={props.getGenre}>Mystery</a>
                    <a href="#anchor" className={`${genreLink}`} id="10749" onClick={props.getGenre}>Romance</a>
                    <a href="#anchor" className={`${genreLink}`} id="878" onClick={props.getGenre}>Science</a>
                    <a href="#anchor" className={`${genreLink}`} id="53" onClick={props.getGenre}>Thriller</a>
                    <a href="#anchor" className={`${genreLink}`} id="10752" onClick={props.getGenre}>War</a>
                    <a href="#anchor" className={`${genreLink}`} id="37" onClick={props.getGenre}>Western</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mainMenu = {
    height: "100vh",
    overflow: "auto",
    backgroundColor: "#EE6E73",
    borderTop: "1px solid grey",
    marginLeft: "-.75rem",
    padding: "0 25px",
    color: "white",
    position: "fixed",
    width: "25%",
    top: "64px",
    zIndex: "11"
}
const menuRating = {
    display: "flex"
}
const menuYear = {
    display: "flex",
    marginTop: "25px"
}
const filterName = {
    marginTop: "0",
    marginRight: "10px",
}
let genreLink =css({
    color: "white",
    ':hover': {
        backgroundColor: 'rgba(0,0,0,0.1)'
      },
    fontWeight: "bold",
    whiteSpace: "noWrap",
    display: "block",
    width: "100%",
    padding: "5px 0",
    transition: "background-color .3s"
})
const menuTitle = {
    fontFamily: "'Acme'",
    marginTop: "10px",
    textAlign: "center",
}
const rangeLabel = {
    fontWeight: "bold"
}


export default Menu