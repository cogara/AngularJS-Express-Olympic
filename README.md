# Angular Challenge

ALL RIGHT! Set up a *NEW* project! From the ground up.
Bring in Angular, that's all we will need for our project today.

## Business Need:
We need a way to pick Olympic athletes for our new marketing campain. Make an application that has a `Generate` button that displays one athlete from 5 different sports of your choice. The chosen athletes should have their names and origins (locations) displayed. The athletes should be chosen at random, and should include all athletes competing in a given sport. Information on the athletes can be found [here](http://www.teamusa.org/road-to-rio-2016/team-usa/athletes).


## Technical Requirements
Our application will request 5 payloads from five different Express routes (one for each sport). All of the routes should exist inside of an `Olympics.js` router. The objects returned should follow this template:

    {
      Name: 'John Doe',
      Origin: 'New York, NY'
    }

## Hard Mode:
Style your application with CSS, make it look presentable (think 'Merica).

## Pro Mode:
Add a sixth end point to choose which sport we should choose for our campain and style the winner on the view.
