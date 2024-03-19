# odin_todi

Work hours tracking app
An app that calculates what you can expect to get based of hourly pay with different benefits

\\ FOR TOMORROW

> Find icons that fit the theme -- EDIT / DELETE ICONS -- DATE / TIME FOR CHOOSING day or time in new scope -- Something for the creation buttons


>>>>> WORKING ON
> Need validation for creating new entries and projects. Use toast system to show an error or success. 
> Change scopes -- WORKING ON -- Choose between a specific day or time -- If time create two time inputs - if day create 7 divs, 1 for each weekday.
>> Use a card to define new scope and remove button from the card displaying scopes

> Finish home page
>> Overview from the month - total hours with benefits, kinda like the cards in week
>> Add tax, to check final payment (brutto netto)

>Total page
>> One big statistics page
>>> Average salary each month
>>> Best month
>>> Month with most hours
>>> Total money and hours
>>> Total money taxed

>Header for month and year pages

>MONTH
>> Change to 35 grid layout
>>> extend loop to 35
>>> Return after creating empty cell if loop index is less than startOfMonth().day()
>> Always place mondays first
>> Use headers to indicate which day it is
>> A circle around Today
>> Month and year in header

> YEAR
>> Ability to click a month and have it shown like "month and last month" pages

> NAV
>> A small circle that shows amount of entries in each button

> FUNCTIONALITY
>> Add entries
>>> Verification -- need a date, start and end time, and the date should not be occupied.

>> Remove projects - also removes all entries in that project
>>> Edit and remove buttons next to project titles in nav bar

>> Remove / edit entries
>>> Ability to click a card in week or month -- or a month in year where you can see and edit for that month.

>> Create projects
>>> Verification -- Need a unique name greater than 1 character.

>> Add scopes
>>> Start and end time or specific day
