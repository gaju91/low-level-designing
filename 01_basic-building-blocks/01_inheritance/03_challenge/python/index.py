from abc import ABC
from typing import TypedDict

class ProductDetails(TypedDict):
    name: str
    price: float
    
class Product(ABC):
    def __init__(
        self,
        name: str,
        price: float,
    ):
        self.name = name
        self.price = price
        
    def get_details(self) -> ProductDetails:
        return {
            "name": self.name,
            "price": self.price
        }
        
class ElectronicDetails(ProductDetails):
    warranty: int
    
class Electronic(Product):
    
    def __init__(
        self,
        name: str,
        price: float,
        warranty: int,
    ) -> None:
        super().__init__(name, price)
        self.warranty = warranty
        
    def get_details(self) -> ElectronicDetails:
        return {
            **super().get_details(),
            'warranty': self.warranty
        }
        
class SmartPhoneDetails(ElectronicDetails):
    storage_gb: int
    os: str
    
class SmartPhone(Electronic):
    def __init__(
        self, 
        name: str, 
        price: float, 
        warranty: int,
        storage_gb: int,
        os: str,
    ) -> None:
        super().__init__(name, price, warranty)
        self.storage_gb = storage_gb
        self.os = os
        
    def get_details(self) -> SmartPhoneDetails:
        return  {
            **super().get_details(),
            'storage_gb': self.storage_gb,
            'os': self.os
        }


if __name__ == "__main__":
    product = Product("Table", 500)
    print("Product Details:", product.get_details())

    electronic = Electronic("Computer", 5000, 5)
    print("Electronic Details:", electronic.get_details())

    smartphone = SmartPhone("iPhone 15", 999, 2, 256, "iOS")
    print("Smartphone Details:", smartphone.get_details())
