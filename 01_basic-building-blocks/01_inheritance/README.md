# Inheritance

Inheritance is a fundamental concept in Object-Oriented Programming where a class can inherit properties and methods from another class.

## Concept

**Inheritance** allows you to create a new class based on an existing class. The new class (child/derived class) inherits attributes and behaviors from the existing class (parent/base class).

### Key Terms

- **Parent Class / Base Class / Super Class**: The class being inherited from
- **Child Class / Derived Class / Sub Class**: The class that inherits
- **IS-A Relationship**: Describes the relationship (e.g., Car IS-A Vehicle)

## Types of Inheritance

1. **Single Inheritance**: Child inherits from one parent
2. **Multiple Inheritance**: Child inherits from multiple parents (not available in all languages)
3. **Multilevel Inheritance**: Chain of inheritance (A → B → C)
4. **Hierarchical Inheritance**: Multiple children inherit from one parent
5. **Hybrid Inheritance**: Combination of two or more types

## Benefits

- **Code Reusability**: Avoid duplicating code
- **Logical Hierarchy**: Models real-world relationships
- **Polymorphism Support**: Enables method overriding
- **Maintainability**: Changes in parent class reflect in child classes

## When to Use

- Clear IS-A relationship exists
- Need to share common behavior across related classes
- Building hierarchical structures

## TypeScript vs Python

### TypeScript Benefits for LLD:
- ✅ **Access Modifiers**: `public`, `private`, `protected`
- ✅ **Abstract Classes**: Force implementation with `abstract`
- ✅ **Interfaces**: Define contracts
- ✅ **Type Safety**: Catch errors at compile time
- ✅ **Better OOP**: Closer to Java/C# for learning

### Python Benefits:
- ✅ **Multiple Inheritance**: Inherit from multiple parents
- ✅ **Duck Typing**: Flexible and dynamic
- ✅ **Simpler Syntax**: Easier to write quickly

## Challenge Structure

Each challenge has empty starter files:
- `XX_challenge/typescript/index.ts` - TypeScript implementation
- `XX_challenge/python/index.py` - Python implementation

See `CHALLENGES.md` for problem descriptions

## Common Patterns

- Vehicle hierarchy (Vehicle → Car → ElectricCar)
- Animal classification (Animal → Mammal → Dog)
- Employee types (Employee → Manager → Executive)
- Shape hierarchy (Shape → Circle, Rectangle)

## Best Practices

- Keep inheritance hierarchies shallow (prefer composition over deep inheritance)
- Use inheritance for IS-A relationships, not HAS-A
- Don't inherit just to reuse code (use composition instead)
- Follow the Liskov Substitution Principle (from SOLID)
