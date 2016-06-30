# sortable-lists-example
Shows the use of an angular directive with jQuery to create sortable lists.

The power of this app is in the sortDirective.  The sortDirective will allow the coder to easily create sortable lists that can be manipulated with dragging and then can be stored for sort order.  It also allows the coder to link two lists together and drag between two lists.  Lastly, it allows the lists to have a one way direction to move items from one list to another but not back.

#SortableList

###Simple Implimentation:
```html
<ul sortable-list="listObjFromScope">
	<li>item.nameOfValue</li>
</ul>
```
Declaring sortable-list with the value equal to the list object from the scope will automatically make it sortable.  The variable 'item' is created for you as the variable of each object in the list.

###Connect-with
```html
<ul sortable-list="listObjFromScope" connect-with="otherListFromScope">
	<li>item.nameOfValue</li>
</ul>
```
Adding a connect-with list will create one way binding to that list for dragable list items.  For two way binding both lists need to connect-with the other list.

###Item-name
```html
<ul sortable-list="listObjFromScope" item-name="alt_name">
	<li>alt_name.nameOfValue</li>
</ul>
```
Adding an item-name will rename or declare the name of the variable in the scope.  This is recommended for readbility purposes as using the default 'item' will no be clear to where the variable name was created.

###order-by
```html
<ul sortable-list="listObjFromScope" order-by="unique_order_int">
	<li>item.nameOfValue</li>
</ul>
```
Declaring order-by will allow the sortable-list to alter the order-by value when objects move.  The value is treated as an index and require a 0-n format.  This allows for easy storing of order.  Without order-by declared the sortable-list will default to the index of the array.

###$interpolation
SortableList uses $interpolation for the child html block inside of the sortableList block.  This allows for any amount of DOM customization in the list block and does not constrain the coder to `<li>`


#Run this app
This app runs on node and contains all of its needed dependancies.

Order of operations to run app
1. Git clone https://github.com/andrewsheffield/sortable-lists-example.git
2. cd sortable-lists-example
3. npm install
4. npm start
5. In browser go to http://localhost:8000