import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const MarcusGarveyTribute = () => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="styles.css" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Marcus Garvey Tribute</title>
      </head>
      <body>
        <main id="main">
          <h1 id="title">Marcus Garvey</h1>
          <div id="img-div">
            <img 
              src="https://cdn.britannica.com/66/766-050-FFA3B798/Marcus-Garvey-1922.jpg" 
              alt="Photo of Marcus Garvey" 
              width="500" 
              height="600" 
              id="image" 
            />
            <div id="img-caption">Marcus Garvey in 1922</div>
          </div>
          <div id="tribute-info">
            <p>
              Marcus Garvey (1887-1940) was a Jamaican political leader, publisher, journalist, 
              and orator who was a staunch proponent of Black nationalism and Pan-Africanism. He 
              founded the Universal Negro Improvement Association (UNIA) in 1914, which aimed to 
              unify and empower people of African descent worldwide. Garvey is best known for his 
              efforts to promote African cultural pride and economic independence, as well as his 
              advocacy for the return of the African diaspora to their ancestral lands. His legacy 
              includes his influence on future civil rights movements and leaders, despite facing 
              significant opposition and legal challenges during his lifetime. Garvey's vision and 
              rhetoric laid important groundwork for later movements advocating for racial equality 
              and self-determination.
            </p>
            <a 
              href="https://en.wikipedia.org/wiki/Marcus_Garvey" 
              target="_blank" 
              rel="noopener noreferrer" 
              id="tribute-link"
            >
              Link to More Info
            </a>
          </div>
          <div>
            <a 
              href="https://pamela-limitless.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="previous page"
            >
              Previous Page
            </a>
            <a 
              href="https://adrian-monk-tribute-page.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="next page"
            >
              Next Page
            </a>
          </div>
        </main>
      </body>
    </>
  );
};

ReactDOM.render(<MarcusGarveyTribute />, document.getElementById('root'));