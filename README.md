# BMR-calculator

Creating a BMR calculator to explore the various Web-UI programming patterns as part of a Web Application Development class

# What the project does

The BMR Calculator calculates the Body Metabolism Rate based on Age, Height and Weight.
This is achieved in the calc() function by using the Mifflin-St Jeor Equation.
The Calculator also allows typical and advanced users to calculate the Calorific need based on Physical activity.

# Separation of code

The bmrcalc.html renders the data on the webpage. The execution.js file is the Javascript file with functional implementation of event handlers and helper functions.

# Functionality documentation

How the project has been implemented:

Hidden information:-

It has been implemented using the 'More info' button in the webpage. It is available only for Typical and Advanced users.
This gives additional info about how and when BMR is measured.

Expandable inputs:-

The expandable inputs is implemented in calories() function. It provides the user with a dropdown list of options to choose from based on his physical activity. The value obtained from this is used to calculate the daily calorific need, given the BMR.
This is implemented in the calneed() function. This feature is available to all except Naive users.

Wizards:-

The Sample button is used to implement the wizards. The underlying JS function is wizardcalc(). This function adds values to the input fields and outputs the corresponding BMR to showcase the utility of the calculator.
This option is available for Naive and Novice users

Overflow Menus:-

This option is made available only to advanced users and can be reached by calculating the daily calorific need and converting it to Joules or Kilocalories. After choosing the exercise value and calculating calorific need, an extra option of "Settings" appears and is made available to get the value in another unit

Coach Marks:-

The coach marks are provided exclusively to the Naiive users and are implemented using the ageinput(), weightinput(), heightinput() and buttoninput() methods.

Input hints:-

These are available for the Naiive and Novice users. These are hints that show up if you hover around the age input field and prompt to enter the various input fields. These are implemented in the inputhint() function

Popovers:-

The popovers is available to typical and advanced users. These are in the form of a button called Dropdown help. This would generate an alert with instructions on the use of the dropdown list. Implementation can be found in exercise_help function.

Default Values:-

Available only to typical and advanced users, these provide details of tendency of BMR and let the user know what the tendency would be based on their age.

Featured content:-

Available for the advanced users. This suggests values for the age.

# Sources of reference

- w3schools.com
- stackoverflow.com
- calculator.net
