-   [x] Add weather API
-   [x] Add thumbs up functionality
-   [x] Add reply functionality
-   [x] Add create new post, update post, etc.
-   [x] Add redux
-   [x] Build out search details page
-   [x] Decouple homePage and post stream

## Updated Todos (30 November 2022)

-   [ ] User to User relationship (follow)
-   [ ] User sessions
-   [ ] User privileges (User vs Moderator)

    -   Want to be a moderator fake form
    -   Different home page?
    -   Can delete any post?
    -   Can delete users?

-   [x] Move Posts to DB
-   [x] Store location data in Post DB object
-   [x] Display temp and conditions on PostItem
    -   [x] weather icons relating to conditions at the time of posting
        -   cloudy
        -   sunny
        -   rain
        -   snow
        -   fog
-   [ ] User icons in DB?
    -   store link to https://ui-avatars.com/api/?background=random&name=John+Doe
-   [ ] Sort My Posts/Liked Posts on Profile page
-   [ ] Fahrenheit vs. Celsius state management? Make 24 hour time propagate properly (it stores in the DB but redux has an old cache)
-   [x] Login/Register error handling
-   [x] If user is not logged in and tries to post, nav to /login
