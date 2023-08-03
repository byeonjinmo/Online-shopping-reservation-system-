const OrderCommand = require('./utils/orderManager');
const { AllProductsQuantityStrategy, SingleProductQuantityStrategy } = require('./utils/quantityStrategies');
const PaymentObserver = require('./utils/paymentObserver');
const userManager = require('./utils/userManager');
const productManager = require('./utils/productManager');

const admin = userManager.createUser('민성', 'admin'); //관리자
const customer = userManager.createUser('진모', 'customer'); //고객

productManager.addProduct('laptop', 10, 2000000);  //이름, 분량, 가격
productManager.addProduct('phone', 20, 1500000);  //이름, 분량, 가격

const products = productManager.listProducts();

const paymentObserver = new PaymentObserver();

console.log(admin, customer);
console.log(productManager.listProducts());


const laptopOrder = new OrderCommand(customer, products[0]);
laptopOrder.addObserver(paymentObserver);
laptopOrder.execute();  // 주문 실행

const phoneOrder = new OrderCommand(customer, products[1]);
phoneOrder.addObserver(paymentObserver);
phoneOrder.execute();  // 주문 실행


const allProductsQuantityStrategy = new AllProductsQuantityStrategy();
console.log('총 제품 수량:', productManager.checkQuantity(allProductsQuantityStrategy));
const singleProductQuantityStrategy1 = new SingleProductQuantityStrategy('laptop');
const singleProductQuantityStrategy2 = new SingleProductQuantityStrategy('phone');
console.log('Laptop 수량:', productManager.checkQuantity(singleProductQuantityStrategy1));
console.log('phone 수량:', productManager.checkQuantity(singleProductQuantityStrategy2));