// #region V1 - Traditional Approach

/**
 * Traditional approach with explicit property declarations.
 * Verbose but clear for beginners.
 */
export class Employee_V1 {
    protected readonly name: string;
    protected readonly employee_id: number;
    protected readonly base_salary: number;

    constructor(
        name: string,
        employee_id: number,
        base_salary: number,
    ) {
        this.employee_id = employee_id;
        this.name = name;
        this.base_salary = base_salary;
    }

    calculate_salary(): number {
        return this.base_salary;
    }
}

/**
 * Manager with team bonus: $1000 per team member
 */
export class Manager_V1 extends Employee_V1 {
    private team_size: number;

    constructor(
        name: string,
        employee_id: number,
        base_salary: number,
        team_size: number,
    ) {
        super(name, employee_id, base_salary);
        this.team_size = team_size;
    }

    /**
     * Formula: base_salary + (team_size * $1000)
     */
    calculate_salary(): number {
        return this.base_salary + (this.team_size * 1000);
    }
}

// #endregion

// #region V2 - Parameter Properties (TypeScript Shorthand)

/**
 * Uses TypeScript parameter properties for cleaner code.
 * Properties declared directly in constructor parameters.
 */
export class Employee_V2 {
    constructor(
        protected readonly name: string,
        protected readonly employee_id: number,
        protected readonly base_salary: number,
    ) { }

    calculate_salary(): number {
        return this.base_salary;
    }
}

/**
 * Manager using parameter properties shorthand
 */
export class Manager_V2 extends Employee_V2 {
    constructor(
        name: string,
        employee_id: number,
        base_salary: number,
        private team_size: number,
    ) {
        super(name, employee_id, base_salary);
    }

    /**
     * Formula: base_salary + (team_size * $1000)
     */
    calculate_salary(): number {
        return this.base_salary + (this.team_size * 1000);
    }
}

// #endregion

// #region V3 - Abstract Class + Interface Parameters

export interface IEmployee_V3_Params {
    name: string;
    employee_id: number;
    base_salary: number;
}

/**
 * Abstract base class enforcing salary calculation.
 * Uses interface for constructor parameters.
 */
export abstract class BaseEmployee_V3 {
    protected name: string;
    protected employee_id: number;
    protected base_salary: number;

    constructor(params: IEmployee_V3_Params) {
        this.name = params.name;
        this.employee_id = params.employee_id;
        this.base_salary = params.base_salary;
    }

    abstract calculate_salary(): number;
}

export class Employee_V3 extends BaseEmployee_V3 {
    constructor(params: IEmployee_V3_Params) {
        super(params);
    }

    calculate_salary(): number {
        return this.base_salary;
    }
}

export interface IManager_V3_Params extends IEmployee_V3_Params {
    team_size: number;
}

/**
 * Manager using interface params and destructuring
 */
export class Manager_V3 extends Employee_V3 {
    private readonly team_size: number;

    constructor(params: IManager_V3_Params) {
        const { team_size, ...employee_params } = params;
        super(employee_params);
        this.team_size = team_size;
    }

    /**
     * Formula: base_salary + (team_size * $1000)
     */
    calculate_salary(): number {
        return this.base_salary + (this.team_size * 1000);
    }
}

// #endregion

// #region V4 - Production Ready

export interface IEmployeeParams {
    name: string;
    employee_id: string;
    base_salary: number;
}

/**
 * Custom error for employee validation failures
 */
export class EmployeeValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmployeeValidationError';
    }
}

/**
 * Abstract base class for all employee types.
 * Enforces salary calculation implementation and provides common validation.
 */
export abstract class BaseEmployee {
    protected readonly name: string;
    protected readonly employee_id: string;
    protected readonly base_salary: number;

    /**
     * @throws {EmployeeValidationError} If validation fails
     */
    constructor(params: IEmployeeParams) {
        this.validateParams(params);

        this.name = params.name.trim();
        this.employee_id = params.employee_id.trim();
        this.base_salary = params.base_salary;
    }

    /**
     * @throws {EmployeeValidationError} If params are invalid
     */
    private validateParams(params: IEmployeeParams): void {
        if (!params.name?.trim()) {
            throw new EmployeeValidationError('Name is required and cannot be empty');
        }

        if (!params.employee_id?.trim()) {
            throw new EmployeeValidationError('Employee ID is required and cannot be empty');
        }

        if (typeof params.base_salary !== 'number' || params.base_salary <= 0) {
            throw new EmployeeValidationError('Base salary must be a positive number');
        }
    }

    abstract calculate_salary(): number;

    get employeeName(): string {
        return this.name;
    }

    get employeeId(): string {
        return this.employee_id;
    }

    get baseSalary(): number {
        return this.base_salary;
    }

    toString(): string {
        return `${this.name} (${this.employee_id}): $${this.calculate_salary().toLocaleString()}`;
    }

    getDetails(): { name: string; id: string; baseSalary: number; totalSalary: number } {
        return {
            name: this.name,
            id: this.employee_id,
            baseSalary: this.base_salary,
            totalSalary: this.calculate_salary()
        };
    }
}

/**
 * Regular employee with base salary only
 */
export class Employee extends BaseEmployee {
    constructor(params: IEmployeeParams) {
        super(params);
    }

    calculate_salary(): number {
        return this.base_salary;
    }
}

export interface IManagerParams extends IEmployeeParams {
    team_size: number;
}

/**
 * Manager with team-based bonus.
 * Bonus: $1000 per team member
 */
export class Manager extends Employee {
    private readonly team_size: number;
    private static readonly BONUS_PER_TEAM_MEMBER = 1000;

    /**
     * @throws {EmployeeValidationError} If team_size is negative
     */
    constructor(params: IManagerParams) {
        const { team_size, ...employeeParams } = params;
        super(employeeParams);

        if (typeof team_size !== 'number' || team_size < 0) {
            throw new EmployeeValidationError('Team size must be a non-negative number');
        }

        this.team_size = team_size;
    }

    /**
     * Formula: base_salary + (team_size * $1000)
     */
    calculate_salary(): number {
        const teamBonus = this.team_size * Manager.BONUS_PER_TEAM_MEMBER;
        return this.base_salary + teamBonus;
    }

    get teamSize(): number {
        return this.team_size;
    }

    get teamBonus(): number {
        return this.team_size * Manager.BONUS_PER_TEAM_MEMBER;
    }

    toString(): string {
        return `Manager: ${this.name} (${this.employee_id}) | Team: ${this.team_size} | Salary: $${this.calculate_salary().toLocaleString()}`;
    }

    getDetails(): { name: string; id: string; baseSalary: number; totalSalary: number; teamSize: number; teamBonus: number } {
        return {
            ...super.getDetails(),
            teamSize: this.team_size,
            teamBonus: this.teamBonus
        };
    }
}

// #endregion