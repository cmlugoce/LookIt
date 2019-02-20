import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)
class Results extends React.Component {
    render(){
        return(
            <div className="results">
          {this.props.results.map(image => (
              <div>
                  <a href = {image.links.html} alt="unsplash" target="_blank"  rel='noopener noreferrer'> 
                  <img className="img-list" src={image.urls.small} alt="searchresult"
                       key={image.id}/>
                       <div class="user">
                          <p ><FontAwesomeIcon icon='user'/> User: {image.user.username}</p>
                        
                      </div>
                      </a>
  

              </div>

          ))}
      </div>
    )
  }
}


export default Results;