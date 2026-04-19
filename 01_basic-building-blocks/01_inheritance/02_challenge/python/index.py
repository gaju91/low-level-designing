from abc import ABC

class Vehicle(ABC):
    
    def __init__(
        self,
        brand: str,
        model: str,
        daily_rate: int
    ) -> None:
        super().__init__()
        self.brand = brand
        self.model = model
        self.daily_rate = daily_rate
        
    def rent_cost(self, days: int)-> int:
        return self.daily_rate * days
    
    
class LuxuryCar(Vehicle):
    def __init__(
        self, 
        brand: str, 
        model: str, 
        daily_rate: int,
        insurance_per_day: int
    ) -> None:
        super().__init__(brand, model, daily_rate)
        self.insurance_per_day = insurance_per_day
        
    def rent_cost(self, days: int) -> int:
        return super().rent_cost(days) + self.insurance_per_day * days
    
class Bike(Vehicle):
    def rent_cost(self, days: int) -> int:
        return int(super().rent_cost(days) * (0.8))