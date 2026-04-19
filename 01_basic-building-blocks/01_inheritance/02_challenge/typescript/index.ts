interface IVehicle {
    brand: string;
    model: string;
    daily_rate: number;
    rent_cost(days: number): number;
}

abstract class BaseVehicle implements IVehicle {
    constructor(
        public brand: string,
        public model: string,
        public daily_rate: number 
    ) {}

    rent_cost(days: number): number {
        return this.daily_rate * days;
    }
}

class LuxuryCar extends BaseVehicle {
    constructor(
        brand: string,
        model: string,
        daily_rate: number,
        public insurance_fee_per_day = 500
    ) {
        super(brand, model, daily_rate);
    }

    rent_cost(days: number): number {
        return super.rent_cost(days) + (this.insurance_fee_per_day * days)
    }
}

class Bike extends BaseVehicle {
    rent_cost(days: number): number {
        return super.rent_cost(days) * (0.8);
    }
}