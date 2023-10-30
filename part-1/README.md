# World Explorer - Part 1
<p align="center"><img width="100%" src="../repo_banner.png" /></p>


## The Concept
Similar to what we've done with Aesthetic Domain and React Giphy Searcher, we're going to create a searchable interface for a third-party API. You'll be using a free API called [REST Countries](https://restcountries.com/). You won't need to create an API key for it.

For an idea on what your site could look like, here's an example site built using this API: [Countries of the World](http://countries.petethompson.net/)

Similar to the example site and what we've done in our previous React applications, we want the user to first see an "index" page of all countries when they open the site. They will also have the option to search for a specific country.

When they click on a country, whether on the home page or in the search results, it should bring them to a details page with more information about the country they clicked on.

Here's an overview of the MVP for Part 1:
- [ ] Connect your application to the API
- [ ] Load countries into a gallery when the application loads
- [ ] When a country is clicked on, display a details page that shows more information about that country
- [ ] Allow users to search for countries by name. The results of their search will appear in a gallery below the search bar. You can either reuse the same gallery from the home page, or build a new gallery
- [ ] Style the site with a CSS framework of your choice


## Set Up
- Fork & clone this repository
- Scaffold your React app inside this repo using Vite
- Install `react-router-dom` and set it up in `main.jsx` as well as your `App` component.
- Install any additional packages you may choose to use such as `axios`, `tailwindcss`, etc.
- Like with React Giphy, you are free to organize your file structure as you please, since there is no one right way to do so. 
    - Again, it is recommended you follow a similar structure that we do in class so that its easier to compare your code to the example code
    - Make sure that whatever your file structure is, you maintain a consistent separation of concerns.


## Requirements
- You may have as many routes as you wish but are required to have at least the following two:
    - **A `HomePage` Route**:
        - Is rendered when the `App` component mounts
        - Displays a gallery of all countries pulled from the ["all" endpoint](https://restcountries.com/#endpoints-all). Each country in the gallery must include **at least**:
            - The country name 
            - The languages spoken
            - The currency used
    - **A `DetailsPage` Route**
        - Is rendered when a country in a country gallery is clicked
            - If you have two separate galleries for the `HomePage` and a `SearchPage`, each gallery's countries must link to the `DetailsPage` route
        - Displays more details about each country. The following details must be included (if available):
            - Country name
            - Country capital
            - The continent it pertains to
            - Languages spoken
            - Currency used
            - An image of the flag
            - Population
            
            ***NOTE***: If any of the above properties (such as language or currency) don't exist in a country that you're rending it will break your app!! Make sure to conditionally render any elements that are using properties that are not 100% consistent across every country. For example:
            ```jsx
            // This code can go above the return block
            let languageElement = <p>No language data data available</p>
            if (country.languages) {
                languageElement = country.languages.map(//create elements for each country langauge...)
            }
            
            // And then in your return block you could render the variable
            return (
                <>
                    <h1>My country data</h1>
                    <p>Some more country data here...</p>
                    {languageElement}
                </>
            )
            ```
- Create search functionality that will display search results in a gallery.
    - The user must be able to search for countries by their name
    - Capture the user's search and send a request to either the [name endpoint](https://restcountries.com/#endpoints-name) or the [full-name endpoint](https://restcountries.com/#endpoints-full-name) to return results back to the user.
- We suggest you have a separate `SearchPage` page route that renders a new gallery to store search results, but you are free to render the search results in the same gallery as the one that will appear on the `HomePage`.
    - This will be a little trickier to implement, because you don't want to overwrite your state variable that stores all the countries once they are pulled from the API.
    - If you do create a `SearchPage` route that renders a new gallery, make sure each country in the new gallery includes all the required data points that the `HomePage` gallery displays.


## Bonus
- In the [example site](http://countries.petethompson.net/) shared above, the search results appeared as a user typed into the search input field. How might you implement this search feature?
    - <details><summary>Hint</summary>You can use state! As a user types into the input field, search the state variable that stores all the country objects for countries that match the user's input.</details>
- Embed Google Maps into the `DetailsPage`
    - You will need to use the country's name and capital for this
    - Create an `iframe` element to embed the map. Here's a sample `iframe`:
        ```jsx
        <iframe
            src="https://maps.google.com/maps?q=Dublin&amp;Ireland&amp;z=5&amp;output=embed"
            width="600"
            height="450"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        ```
        - Research what unfamilar attributes like `loading` and `referrerPolicy` are doing in the MDN docs.
        - Notice that the `src` attribute takes a query string with several key-value pairs. Let's define each key:
            - `q`: This would contain the query, or what you're searching for on Google Maps. In our case we will be searching for a country using it's capital city and country name.
            - `z`: This sets the zoom level of the map. It takes an integer. You can change the integer to see which zoom setting you prefer.
            - `output`: We won't change the value of this key. We need to pass it a key of `embed` so we don't run into an errors.
        - When creating the query string for the `q` key, you'll need to replace all spaces with `&amp;`. For example, to embed a map of the United States you could pass this value into the `q` key:
            ```html
            Washington&amp;D.C.&amp;United&amp;States
            ```
            Determine how you could create that string dynamically so that you can build your `iframe` like this:
            ```jsx
            <iframe
                src={`https://maps.google.com/maps?q=${mapsQuery}&amp;z=5&amp;output=embed`}
                width="600"
                height="450"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            ```

## Submission & Future Deliverables
- The completed app is a deliverable. When you finish this part, make a commit message:
    ```
    Part 1 Complete
    ```
   Do the same for future parts
- We will be building an Express backend for this application as we learn about the MERN stack next week. For each concept we cover in class you will add more features to this application. Make sure you are setting yourself up for success by taking your time choosing a CSS framework and organizing the file structure of this app.
- The completed app will be turned in at the start of class on the due date marked in the class directory. Be prepared to present your final app:
    - Expect to share how you were able to build certain features on your site and why you chose to build it the way you did.
    - Using your code, show where you ran into difficulties and how you overcame them


## Licensing
1. All content is licensed under a CC­BY­NC­SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
