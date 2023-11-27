import React from 'react'

import './styles.css'

import axios from 'axios'


const journal_card = () => {
    return (
      <div classname="journal_card">
        <div class="cols">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Lorem ipsum, sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
      </div>
      
    </div>
    );
  };
  
  export default journal_card