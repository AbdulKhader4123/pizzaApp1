# PizzaApp

Check out the application here :https://pizza-king.vercel.app/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Application Landing screen
  * Displays the orders & its details
  
![ScreenShot](https://user-images.githubusercontent.com/59159195/112782903-bfe09900-906b-11eb-8320-a1a9501a75d6.png)

  * User can hover over the chart to get the total orders under each status.
  * By clicking on any the data in the grid/table is filtered out.

![ScreenShot](https://user-images.githubusercontent.com/59159195/112784136-80677c00-906e-11eb-8cc7-20b79addd6d0.png)

  * User can click on the labels to filter out the chart data, by which user can visualize other categories distribution.
  
 ![ScreenShot](https://user-images.githubusercontent.com/59159195/112784288-e2c07c80-906e-11eb-93f3-167667ecfeb1.png)
 
 * User can filter/search for any specific text by enter the grid by entering the search keyword in the textbox above the grid/table
 
 ![ScreenShot](https://user-images.githubusercontent.com/59159195/112784586-b22d1280-906f-11eb-93c7-949d9c0a723a.png)
 
 * User can change the status of any order using the action dropdown menu 
 
 ![ScreenShot](https://user-images.githubusercontent.com/59159195/112784763-151ea980-9070-11eb-8e6d-6273a608433f.png)
 
  * Order status will be updated, grid & chart data's are updated.
  
 ![ScreenShot](https://user-images.githubusercontent.com/59159195/112784874-5020dd00-9070-11eb-9128-08f143be0c25.png)
 
 * User can view the detailed order information by clicking on the the order id.

![ScreenShot](https://user-images.githubusercontent.com/59159195/112785084-d50bf680-9070-11eb-8993-a597daf7f6e9.png)

* User can sort the columns values by double clicking on the column header.

![ScreenShot](https://user-images.githubusercontent.com/59159195/112785199-10a6c080-9071-11eb-9015-08b6c098935a.png)

* User can filter grid data using the menu next to column header( numeric or text filter options are provided based on the column dataType.

![ScreenShot](https://user-images.githubusercontent.com/59159195/112785355-6b401c80-9071-11eb-9204-ba41ad7e04b2.png)

## AgGrid provides additional functionalities 

 * interchanging columns position by dragging the column.
 * If user feels a particular column makes no sense to him , user can remove the column by dragging the particular column out of the grid/table.
 * User can increase/reduce the column width by dragging.
 
## Additional Dependencies
  * AgGrid DataTable
  * ng2-charts


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
