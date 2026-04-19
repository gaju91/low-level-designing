interface IProductDetails {
    name: string,
    price: number,
}

interface IProduct extends IProductDetails {
    get_details(): { name: string, price: number },
}

class Product implements IProduct {
    constructor(
        public name: string,
        public price: number,
    ) { }

    get_details(): IProductDetails {
        return {
            name: this.name,
            price: this.price
        }
    }
}

interface IElectronicsDetails extends IProductDetails {
    warranty: number
}

class Electronics extends Product {
    constructor(
        name: string,
        price: number,
        public warranty: number
    ) {
        super(name, price);
    }

    get_details(): IElectronicsDetails {
        return {
            ...super.get_details(),
            warranty: this.warranty
        }
    }
}

interface ISmartPhoneDetails extends IElectronicsDetails {
    storage_gb: number,
    os: string,
}

class SmartPhone extends Electronics {
    constructor(
        name: string,
        price: number,
        warranty: number,
        public storage_gb: number,
        public os: string
    ) {
        super(name, price, warranty);
    }

    get_details(): ISmartPhoneDetails {
        return {
            ...super.get_details(),
            storage_gb: this.storage_gb,
            os: this.os,
        }
    }
}

const product = new Product('Table', 500);
console.log('Product Table Details', product.get_details())

const electronic = new Electronics('Computer', 5000, 5);
console.log('Product Computer Details', electronic.get_details())

const smartPhone = new SmartPhone('SmartPhone', 8000, 2, 16, 'Android');
console.log('Product SmartPhone Details', smartPhone.get_details())

