# TypeScript
- Language by Microsoft for ES 6 based application development

- ES 6 Features implemented in TypeScript
    - Scope Definitions using 'let' keyword (say goodbye to 'var')
    - String Interpolation aka Template string aka Immutable String Object definition
    - Arrow Operators
    - Data Types
        - Number, String, Object, Array<T>, Date, any (default), void (used by the method that does not returns anything)
        - enum
        -  Union Types  
            - Declaring a varibale with More than one Datatype
    - Array Class with Various methods    
        - push(), pop(), shift(), unshift(), sort(), reverse(), filter(), forEach(), map(), reduce(), etc.
        - Using Array<T> generic class
            - T can be TypeScript Supported Datatype
    - String class with Various methods
        - substr(), subString(), replace(), search(), etc.
    - Type Definitions
        - Creating the custom datatype definition based on multiple Standard types 
    - rest parameters aka spread operators
        - used to pass multiple variable number of parameters to a method
        - Used by mutating the object by adding new values /  properties in existing object
    - Object Oriented Programming
        - Class
            - Access Specifiers
            - private, public, protected
            - default access specifier for methods is public
        - Generics
        - Interfaces    

# Programming with TypeScript
    - Create a package.json
        - A file that configure the ES based projects (Front0End and Server-Side)
    - The Machine MUST Node.js
        - This will provide the 'npm' utility
        - Create a package.json using following command 
                - npm init
                    - Command line Wizard to create a package.json
                - npm init -y | npm init -f
                    - Create a package.json with defaults
    - Install TypeScript in Global Scope
        - npm install -g typescript                
            - This will provide the 'tsc' utility
            - This utility will be used to transpile TypeScript into JavaScript
                - tsc [Source-TypeScript].ts  
        - If the TypeScript transpilation is failing then do not forcefully use the transpiled JavaScript for production
            - This may result into App Crash or Memory-Leaks         
