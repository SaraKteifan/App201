import React from 'react'
import './CSS/SocialCards.css'

function SocialCards() {
  return (
    <div className="container Scontainer">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-linkedin-square Si" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a className='soA' href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
              </h3>
              <p>This is where I network and build my professional protfolio.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-twitter-square Si" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a className='soA' href="https://twitter.com/AdamDipinto" target="_blank">@AdamDipinto</a>
              </h3>
              <p>This is where I read news and network with different social groups.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-github-square Si" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a className='soA' href="https://github.com/atom888" target="_blank">App201</a>
              </h3>
              <p>This is where I share code and work on projects.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SocialCards