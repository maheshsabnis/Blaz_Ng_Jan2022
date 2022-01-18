# Assignments

# Date: 10-Jan-2022

1. Create a ProductInfo class with ProductId (string), ProductName (string), CategoryName (string), Manufacturer (string), BasePrice(number)
2. Create a ProductsLogic class with Following methods
    -  A Public Method that will return all Products
    - A public method that will accept search criteria as input parameters like
        - CategoryName, Manufacturer
        - Based on these parameters Products will be returned   
            - CategoryName && Manufacturer
            - CategoryName || Manufacturer    
            - CategoryName and Manufacturer as undefined
            - CategoryName  as undefined || Manufacturer
        - Create a Private method to validate Products as    
            - ProductId MUST be unique
            - Other string values MUST be non-empty and non-undefined
            - Numeric value Must be positive
        - create a AddProduct() method that will accept ProductInfo. If all values are valid then only the Product will be added and Products Array will be returned      

# Date: 11-Jan-2022
1. Create a Windows Calculator Component with 
    - +,_,*,/, Power, Square Root

# Date: 12-Jan-2021
1. Create a Reusable <SelectComponent> that will generate DropDownList for Categories and Manufacturers. The Selected Category/Manufacture must be send to the parent
2. Modify the DataGridComponent by generating 'Delete' button in each table-row, when this button is clicked, the selected row MUST be deleted from the array of the parent component  

# Date: 13-Jan-2021

1. Create a Directive That will validate the data entered in Input element based on the following validation rules
    - The Data MUST be Positive Integer
    - The Length must be Minimum 2 Digits and Maximum 10 digits
    - Only one decimal point is allowed while entering data
    - Activate the Directive on 'change' event
2. Modify the DataGridComponent with following requirements
    - In Each column Header Generate Two Arrow buttons Up-Arrow and Down-Arrow (Use Bootstrap CSS)
    - When the Up-Arrow is clicked, the data in DataGridComponent MUST sorted in ascending order Based on that column and same for Down-Arrow where data in DataGridComponent MUST sorted in descending order based on that column      

# Date: 14-Jsn-2022
 (1-to-4 are mandatory)
1. Modify the ProductFormComponent to implement required Validation on each field 
2. Write a Custom Validator for following
    - The ProductName MUST not have Special Characters and Must start from Upper Case Character 
    - The Description May contain aplha-numeric characters but Must start from Upper Case Character 
    - Make sure that the ProductId is not repeated
3. When validations are failed then the Input Element MUST be having border as Red color
4. Show * in red color for all mandatory entries
5. (optional) Create a Validation Summary component to show all error messages on the bottom of the component

# Date: 18-Jan-2022
1. Create an angular application That will perform following
    - Create Two Model classes as follows
        - Categories
            - ECT, ECL, FOD
        - Products
            - This will contains information about product as ProductId, ProductName, CategoryId, UnitPrice
        - Purchase
            - ProductId, CategoryId, QUantity, UnitPrice total price
        - Total Bill
            - Show An Array of all Purchase
    - Create Component that will list all categories
    - When a specific Category is selected, display all products of Selected Category
    - Select a Row for a Product and in Purchase component, display product where you can enter QUantity, this will calculate total price of a product against the quantity

    - Finllay click on a  checkout link and its should all purchased products with the total bill at the end
2. Your service will contains
    - CategoryId to filter products
    - Array of Purchases
     



