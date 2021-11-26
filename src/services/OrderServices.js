import Services from './Services';

class OrderService extends Services {
  postOrder = data => {
    this.post('order', data);
  };
}

let orderService = new OrderService();
export default orderService;
