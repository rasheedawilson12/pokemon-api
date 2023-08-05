Title

Pokemon API - PokeDex

Description
Users will be able to be the best and become Pokemon masters with this PokeDex powered by the PokeAPI! Search through over 1000 Pokemon officially registered in the National PokeDex! Learn types and information about your favorite Pokemon. You can also study base stats and the evolution path for all Pokemon!

Wireframes

The initial wireframe was sketched out on paper of what I wanted to have the PokeDex look like. Eventually I went online and looked for pictures and templates so that I could gain inspirations for colors and designs.

![Alt text](wireFrame-1-1.jpeg)

I eventually used this picture as my inspiration while putting my own spin and flare to the application.

![Alt text](desktop-wallpaper-pokemon-pokedex-background-1-1.jpg)

Component Hierarchy

![Alt text](compondentHierarchy-1.jpg)

• The component hierarchy consists of the required base of the Index.js going down to the App.js.
• App.js has two children for this project, Main.jsx and Nav.jsx as siblings.
• Nav.jsx has no children while Main.jsx has two children that it will passed information through, Card.jsx and PokemonState.jsx.
o The siblings do not share any information across, but receive all of the needed information passed down from their parent Main.jsx via props.

Dependencies
• axios
• useState
• useEffect
• async/await

API
I used the PokeAPI which is a free API offered from https://pokeapi.co/.
API Call (https://pokeapi.co/api/v2/pokemon/)
Documentation (https://pokeapi.co/docs/v2)

MVP
• The minimum functionality that I wanted for this app was to make sure that I could make an API call that would display all the Pokemon and their stats.
• I eventually was able to develop the functionality to display a pokemon’s image and stats in a separate container with an onClick function.
• I was able to use pagination logic to be able to click through the results 20 items at a time, stopping on the last page without error.

Post-MVP
• Stretch goals for this app would include a search bar that would return Pokemon results based on name or type and/or a filter that would allow the user to filer through Pokemon by type.
• Another stretch that I would like to add if I had more time would be a function that allowed users to pick two Pokemon and compare their stats as if they were in a Pokemon battle and return who the projected winner would be.
