from abc import ABC, abstractmethod

# Abstract base class enforcing salary calculation implementation
class IBaseEmployee(ABC):

    @abstractmethod
    def calculate_salary(self) -> int:
        """Must be implemented by all employee types"""
        pass

# Regular employee with base salary only
class Employee(IBaseEmployee):

    def __init__(
        self,
        name: str,
        employee_id: int,
        base_salary: int
    ) -> None:
        self.name = name
        self.employee_id = employee_id
        self.base_salary = base_salary

    def calculate_salary(self) -> int:
        return self.base_salary

# Manager with team-based bonus
class Manager(Employee):

    def __init__(
        self,
        name: str,
        employee_id: int,
        base_salary: int,
        team_size: int
    ) -> None:
        super().__init__(name, employee_id, base_salary)  # Call parent constructor
        self.team_size = team_size

    def calculate_salary(self) -> int:
        """Formula: base_salary + (team_size * $1000)"""
        return super().calculate_salary() + self.team_size * 1000





