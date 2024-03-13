# odin_todi

Work hours tracking app
An app that calculates what you can expect to get based of hourly pay with different benefits

7.5 = 7 + 0.5*60
730 = 7 + 30/60

> Add a function to erase a page -- Added one to reset page
> Add a controller -- DONE
>> Change page
>> Get current page
>> Store categories, entries and scopes
>> 

> Sorting of entries based on weeks or months
>> Sort based on best paid day

> Group based on work location or company

> Overview of total hours and different benefits


> Change page
>> Get current page, compare with new page, if same return
>>> If not same, run (createPage(newPage))
>>>> createPage(newPage) compares array and calls the correct page creation based on that. ('week', 'default') would create the week all projects page
>>>> When creating the buttons, add event listeners that call the createPage with their category as the second parameter.