# Online-shopping-reservation-system-
Programming with an emphasis on object-oriented design and adhering to the SOLD5 principles 


Run test code with index.js   

Modularize and separate roles


# Applying Patterns Explained 
1. Singleton pattern: The ProductManager class, userManager, uses the Singleton pattern. 
   Instances of this class are created anew only the first time they are created, and always return the same instance thereafter.

2. Factory pattern: The createUser method in userManager and the addProduct method in ProductManager use the Factory pattern. 
   The Factory pattern is designed to simplify object creation by encapsulating user creation logic.

3. Strategy pattern: The AllProductsQuantityStrategy and SingleProductQuantityStrategy classes implement the Strategy pattern.
   This pattern allows you to dynamically change the way you determine the quantity of a product.

4. Command pattern: The OrderCommand class is used as part of the Command pattern.
   This class encapsulates the order request and processes the order through the execute() method.

5. Observer pattern: The OrderCommand and PaymentObserver classes use the Observer pattern. 
   An instance of the OrderCommand class notifies all registered observers whenever an order is placed. 
   If a PaymentObserver is registered as an observer, it updates the total payment amount based on the order information.
