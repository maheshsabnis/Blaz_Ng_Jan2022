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
