import React, { Component } from 'react';
import axios from 'axios';
import Results from './Results'
const API = `${process.env.REACT_APP_API_KEY}`
class SearchBar extends React.Component {
    state = {
        searchValue:"",
        results: []
    }

    handleChange=(e)=>{
       this.setState({ searchValue: e.target.value})
       //console.log(e.target.value)
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const search = this.state.searchValue
        axios.get(`https://api.unsplash.com/search/photos/?client_id=${API}&per_page=30&orientation=landscape&query=${search}}`).then(res => {
            this.setState({
                 
                results: res.data.results
            })     
})
    }
    
    render(){
        return(
            <div className='searchBar'>
             <form onSubmit={this.handleSubmit}>
                 <input type='text' placeholder='Search for images...' value={this.state.searchValue} onChange={this.handleChange}/>
                 <input type='submit'id='submit'/>
             </form>
             <Results results={this.state.results}/>
            </div>
        )
    }
}


export default SearchBar;