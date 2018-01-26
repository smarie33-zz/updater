# updater
Test for Updater: sass, vue

### Acceptance Criteria
+ All properties are required except the  promoMessage ,  promoCode ,  features  and profileHref . If any of the optional properties are empty, then the component should not render that particular section of the card.
+ The  View Profile  and  CTA  links open in a separate tab.
+ The  Features  section and  View Profile  link are hidden on the mobile view as shown in
the mobile image above.

#### Why you chose the technology you did to build the component in
+ I choose Vue because it is a component based Javascript framework that accepts objects as data that it decimenates to different parts of its templates.

#### Your thought process behind the structure of the component.
+ Classes are used for common style properties that multiple elements can have; like padding and color.
+ Each object property also gets its own class so specific styling can be applied to each area.
+ `v-if` directives are used to switch between padding only divs and object derived elements depending on if the corresponding property is in the object.
+ The profile link and CTA are wrapped in a div that sits at the bottom of the card so that the bottom of every card is aligned no matter what the spacing is above.
+ ES6 is used to make all cards the same height on page load and browser resize.

#### How to use the component
+ Use the component in your vue page by adding the `<updater-card></updater-card>` tags
+ pass an object that contains the information for one or more cards
+ use the `v-for` directive to iterate over the object and print one or more cards

### Run
+ `npm install`
+ `$   gulp`
OR
`$   npm build`
