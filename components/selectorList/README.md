# Selector Lists

A selector list is a list that contains selectors of certain type. There are two types, Masters and children.  
Master lists are always displayed and have a relation with the child lists. Master lists also control the rendering of child lists.  
A selector is a filter for the data in a `CharacterList`

## Components

-   `SelectorListsContainer`
    -   Hold all `SelectorList`s (both master and children)
    -   Queries API for the data for the master list
    -   Controls display of `BreadCrumb`
-   `SelectorList`
    -   a `<section>` that holds a list of selectors and a title for the list
-   `SelectorListChildrenContainer`
    -   A container for multiple Children selector lists
    -   Queries API for the data for the children lists
-   `BreadCrumb`
    -   Displays a Breadcrumb of all the selected items
    -   Can Clear selected items

## List Items

These represent an individual selector of a certain type (eg film) and are responsible for dispatching an action if selected to a Search reducer.
