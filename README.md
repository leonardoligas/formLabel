formLabel
=========

Labelform allows you to create dynamic label from a multi select input.
The label can be added and deleted dynamically and then sent with the form.

you can change the graphics easily through the bootstrap css.

To create a label form you need to create a div with an id in the position 
where you want the select box.

Next step, in javascript you should write the following code:

  $ ("#Cars"). FormLabel ({
                     title: 'Delete From list',
                     color: "3166ff"
                     background_color: "ffffff",
                     name: "car",
                     list: new Array ("Ferrari", "Mercedes", "BMW"),
                     existelement: new Array("0","3")
                 });

Where Cars is the id of the div.
list, the list of elements in the select box.
existelement, the labels alredy printed


