/*Factory 패턴은 객체 생성 로직을 메서드 내에 캡슐화하여 사용자 생성 로직을 캡슐화하여 객체 생성을 단순화 함.
addProduct 메서드는 Product객체를 생성하고, 이들 객체를 관리하는 역할을 부여
ProductManager는 Module 패턴을 사용하여 Singleton 패턴을 이용하여 ProductManager의 인스턴스가 한 개만 생성되도록 보장한 객체를 통하여
다른 파일에서도 동일한 ProductManager 인스턴스를 불러와 사용할 수 있게 설계
.*/

const Product = require('../models/product');

class ProductManager {
    constructor() {
        if (!ProductManager.instance) {
            this.products = [];
            ProductManager.instance = this;
        }
        return ProductManager.instance;
    }


    /*addProduct 메소드를 통해 Product 객체를 생성하고 관리 함. 새로운 Product 객체를 생성하여 ProductManager의 products 배열에
     Product 객체는 이름, 수량, 가격을 입력 받아 생성 됨. 이 함수는 팩토리 패턴으로 Product 객체의 생성을 캡슐화 함
    */
    addProduct(name, quantity, price) {
        const product = new Product(name, quantity, price);
        this.products.push(product);
    }

    listProducts() {
        return this.products;
    }

    /*전략 패턴을 이용하여 Product 객체들의 수량을 체크 어떤 방식으로 수량을 체크할 것인지를 결정하는 것은 전달받은 strategy의 execute() 함수에게 맡김
    strategy는 AllProductsQuantityStrategy나 SingleProductQuantityStrategy 같은 전략 객체가 될 수 있습니다.*/
    checkQuantity(strategy) {
        return strategy.execute(this.products);
    }
}

const instance = new ProductManager();
Object.freeze(instance);

module.exports = instance;

