Development team:
Git Master:         Jalyn Campbell
API control:        Qi Feng
Html/CSS:           Eamon McHugh
General:            Jeff Woda

1. Most of the layout is determined in HTML and CSS only the API key is really handled via js file.

2. The wireframe has the applications logo acros the top as header.

3. The user determines the selectio via mls id entry provided to him/her by agent. 

4. Up to two properties may be compared at any time. 

5. These are laid out in a card fashion in responsive view. 

6. Two separate API services are called for this feature 
    a) Realtor.com
    b) map service 

7. The picture and map are both responive to click to expand. 

8. A button is added to remove a property detail. A simple if statements avoid additional entries.

9. Operational Details:

a) Materialize was used for CSS automation
b) jquery and javascript links as well as two js files main and api to separate functionality.
c) html lays out the entire screen 
d) one image class is ear marked for the propertyimage and holds that #ID
e) one image class is ear marked for the map impage and is identified via mapcontainer1 or 2 depending on which card it references.
f) both card inputs are identical differentiated via a number 1 for card one and number 2 for card two. 
g) the footer contains the information on the developer
h) the main.js file simply controls the function of the two buttons to clear the field inputs
i) the api.js creates a constant object reference for the main realtor.com api call. 
j) The realtor api call includes the longitute and latitude reference subsequently used to pull the map information.
k) both input field functions and api calls are identical except for the differentiation on numbers 1 for card one and 2 for card 2.