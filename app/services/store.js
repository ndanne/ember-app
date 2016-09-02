import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';
import Poll from 'woodland/models/poll';
import Option from 'woodland/models/option';

const products = [
	Product.create({title: 'Tent', price: 10, description: 'Somthing'}),
	Product.create({title: 'Sleeping', price: 5, description: 'Somthing two'}),
	Product.create({title: 'Flish-lite', price: 7, description: 'Somthing three'}),
	Product.create({title: 'First-aidkit', price: 10, description: 'Somthing four'})
];
const orders = [
	Order.create({id: '1234', 
		name:'Blaise Blobfish',
		items: [
			LineItem.create({product:products[0], quantity:1}),
			LineItem.create({product:products[1], quantity:1}),
			LineItem.create({product:products[2], quantity:0}),
			LineItem.create({product:products[3], quantity:0})
		]
	}),
	Order.create({id: '5678', 
		name:'Blaise something',
		items: [
			LineItem.create({product:products[4], quantity:1}),
			LineItem.create({product:products[5], quantity:0}),
			LineItem.create({product:products[6], quantity:1}),
			LineItem.create({product:products[7], quantity:0})
		]
	})
];

const polls = [
  Poll.create({
    id: '1',
    question: 'Which Poisonous Plant Are You?',
    options: [
      Option.create({ id: '1', value: 'Nightshade' }),
      Option.create({ id: '2', value: 'Hemlock' }),
      Option.create({ id: '3', value: 'Rhubarb' })
    ]
  }),

  Poll.create({
    id: '2',
    question: 'Which Is Your Favorite Woodland Wanderer Way?',
    options: [
      Option.create({ id: '4', value: 'Honesty' }),
      Option.create({ id: '5', value: 'Integrity' }),
      Option.create({ id: '6', value: 'Patience' })
    ]
  })
];
const options = [];
export default Ember.Service.extend({
	/*getOrderById(id) {
		const orders = this.getOrders();
		return orders.findBy('id', id);
	},

	getOrders() {
		return [
			{ id:'1', name: 'Nate'},
			{ id:'2', name: 'Nagaraju'}
		];
	},*/
	//_emberConsole.default.debug('DEBUG: ' + "Store mail");
	getProducts() { console.log(products); return products; },
	getOrderById(id) { return orders.findBy('id', id); },
	getOrders() { return orders; },
	
	
	getPollById(id) { return polls.findBy('id', id); },
  	getPolls() { return polls; },
	//getOptions() { return options; },
	newOrder(){
		return Order.create({	
			items: products.map((product) => {
				return LineItem.create({
					product: product
				});
			})
		});
	},
	saveOrder(order) {
		order.set('id', 9999);
		order.pushObject(order);
	},
	newPoll(){
    return  Poll.create({
      options: options.map((vote) => {
         return Option.create({
           vote: vote
        });  
      })
    });
  }
});
