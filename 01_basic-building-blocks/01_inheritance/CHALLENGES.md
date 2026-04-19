# Inheritance Challenges

Complete these challenges progressively. Each builds on the previous one. Mark with ✅ when done.

## Challenge 1: Basic Single Inheritance ⭐
**Concept**: Parent-Child relationship, method inheritance

**Scenario**: Create a company employee system
- `Employee` class with: name, employee_id, base_salary
- Method: `calculate_salary()` returns base_salary
- `Manager` class inherits Employee
- Manager has additional property: team_size
- Manager's `calculate_salary()` = base_salary + (team_size * 1000)

**Test Cases**:
- Create Employee("John", "E001", 50000) → calculate_salary() = 50000
- Create Manager("Sarah", "M001", 70000, 5) → calculate_salary() = 75000

**Mark**: [ ] TypeScript | [ ] Python

---

## Challenge 2: Method Overriding ⭐⭐
**Concept**: Child can override parent methods

**Scenario**: Vehicle rental system
- `Vehicle` class: brand, model, daily_rate, `rent_cost(days)`
- `LuxuryCar` inherits Vehicle
- LuxuryCar overrides `rent_cost(days)` to add insurance fee (500/day)
- `Bike` inherits Vehicle
- Bike overrides `rent_cost(days)` with 20% discount

**Test Cases**:
- Vehicle("Toyota", "Camry", 100).rent_cost(3) = 300
- LuxuryCar("BMW", "X5", 500).rent_cost(2) = 2000 (500*2 + 500*2)
- Bike("Honda", "CBR", 80).rent_cost(5) = 320 (80*5 - 20%)

**Mark**: [ ] TypeScript | [ ] Python

---

## Challenge 3: Multi-level Inheritance ⭐⭐
**Concept**: Chain of inheritance (A → B → C)

**Scenario**: E-commerce product hierarchy
- `Product`: name, price, `get_details()`
- `Electronics` extends Product: adds warranty_years, `get_details()` includes warranty
- `Smartphone` extends Electronics: adds storage_gb, os, `get_details()` includes all info

**Test Cases**:
```
Phone: iPhone 15
Price: $999
Warranty: 2 years
Storage: 256GB
OS: iOS
```

**Mark**: [ ] TypeScript | [ ] Python

---

## Challenge 4: The Diamond Problem ⭐⭐⭐
**Concept**: Multiple inheritance conflicts (Python supports, JS doesn't - use different approaches)

**Scenario**: Smart Home Devices
- `PoweredDevice`: has `turn_on()`, `turn_off()`, status
- `NetworkDevice`: has `connect_to_wifi(ssid)`, `get_ip()`
- `SmartBulb` needs BOTH behaviors

**TypeScript**: Use composition (HAS-A) instead of multiple inheritance (TS doesn't support multiple inheritance)
**Python**: Use multiple inheritance and resolve method conflicts

**Test Cases**:
- SmartBulb can turn_on() AND connect_to_wifi("Home_Network")
- Check status AND get IP address

**Mark**: [ ] TypeScript | [ ] Python

---

## Challenge 5: Abstract Behavior (Real-world) ⭐⭐⭐
**Concept**: Force children to implement methods

**Scenario**: Payment Gateway Integration
- `PaymentGateway` (base): process_payment(amount) - should be overridden
- `StripePayment`, `PayPalPayment`, `CryptoPayment` extend it
- Each has different processing logic
- Add validation: amount must be > 0

**Test Cases**:
- Stripe charges 2.9% fee
- PayPal charges 3.5% fee
- Crypto has no fee
- All should reject negative amounts

**Mark**: [ ] TypeScript | [ ] Python

---

## Challenge 6: The Real Challenge 🔥
**Concept**: Design your own hierarchy

**Scenario**: Social Media Platform
Design class hierarchy for different user types:
- Basic users can: post, comment, like
- Verified users get: badge, higher visibility
- Premium users get: ad-free, analytics, custom themes
- Admin users get: delete any post, ban users

**Requirements**:
- Minimum 3 levels of inheritance
- Method overriding in at least 2 places
- Each class must have unique behavior
- Create 4 different user instances and demonstrate all features

**This is open-ended - get creative!**

**Mark**: [ ] TypeScript | [ ] Python

---

## Bonus Challenge: Find the Bug 🐛
**Concept**: Understanding inheritance gotchas

Debug this code (will provide in challenge files):
- Constructor chaining issues
- Wrong method calls
- Infinite recursion
- Missing super() calls

**Mark**: [ ] TypeScript | [ ] Python

---

## Completion Criteria:

✅ **Basic Understanding**: Complete Challenges 1-3 in both languages
✅ **Intermediate**: Complete Challenges 4-5 in both languages
✅ **Advanced**: Complete Challenge 6 creatively
✅ **Master**: Complete Bonus challenge + explain fixes

**You can mark this topic DONE when you've completed at least 1-5 in BOTH languages.**
