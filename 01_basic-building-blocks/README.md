# Basic Building Blocks

Fundamental Object-Oriented Programming concepts that form the foundation of Low Level Design.

## Topics

### 01. Inheritance 

Inheritance is a mechanism where a new class derives properties and behaviors from an existing class.

**Location**: `01_inheritance/`

**What's Covered**:
- Single, Multiple, Multilevel, Hierarchical, and Hybrid Inheritance
- IS-A relationships
- Code reusability through inheritance
- Method overriding
- Parent and Child class concepts

**Languages**: TypeScript, Python

---

### 02. Association (Coming Soon)

A relationship where objects are independent but can use each other. Represents a "uses-a" relationship.

**Key Concepts**:
- One-to-One, One-to-Many, Many-to-Many relationships
- Objects have independent lifecycles
- Can be bidirectional or unidirectional

### 03. Composition (Coming Soon)

A strong form of association where the child cannot exist independently of the parent (HAS-A relationship).

**Key Concepts**:
- Strong ownership and lifecycle dependency
- Part cannot exist without the whole
- Example: House HAS-A Room (room cannot exist without house)

### 04. Aggregation (Coming Soon)

A weak form of association where the child can exist independently of the parent.

**Key Concepts**:
- Weak ownership relationship
- Part can exist independently of the whole
- Example: Department HAS-A Teacher (teacher can exist without department)

### 05. LLD Quiz (Coming Soon)

Test your understanding of basic building blocks with practical quizzes and coding challenges.

---

## Learning Path

1. Start with **Inheritance** to understand class hierarchies and IS-A relationships
2. Learn **Association** to understand how objects relate and communicate
3. Study **Composition** for strong ownership relationships (part-of)
4. Understand **Aggregation** for weak ownership relationships (has-a)
5. Test your knowledge with **LLD Quiz**

## Structure

Each topic contains:
- Concept explanation (README.md)
- TypeScript implementation challenges
- Python implementation challenges
- Progressive difficulty levels (⭐ to 🔥)

---

**Note**: These building blocks are essential before diving into SOLID principles and design patterns.
