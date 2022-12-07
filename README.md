# CHUCK NORRIS JOKES

---

Page link is at https://jctdee.github.io/chuck-jokes/
However, page is currently showing a white screen due to a bundle error. First time encountering this. Until it gets fixed, please fork and make a local copy and run it on your end to test it.

NOTES

- For the background of categories, I used pastel colors. Colors will be different for each user because I made a pastel color generator, tied it to a category, and saved it to local storage. This is because the list of categories are not static. They are grabbed from the Chuck Norris API
- I used a lot of lorem ipsum or fillers since the Chuck Norris does not have some of the features requested (e.g, 'The Granny Joke' headline on a Joke card when you are viewing an item)
- The Chuck Norris API returns a long list and a lot of them do not have categories. On the version this was tested in, the API had 96 items with categories
- The API has some categories where there aren't any items listed under them (e.g, when you click 'Animal', it returns no jokes)
- If you check the code of the menu and its dropdowns, it is kinda messy

MISSING FEATURES

- Moving the arrow animation when hovering over an arrow
- Auto-complete on the search bar
- Prev and Next Joke arrows not re-directing
- Media Queries for both smaller screens and mobile
- Popularity Labels
- Like/Dislike count
