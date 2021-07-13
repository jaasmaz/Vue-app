const app = new Vue({
  el: '#app',
  data: {
    product: 'Laptop',
    products: ['Boots', 'Jackets', 'Shoe', 'Tshirt'],
    image: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    inStock: 10,
    cart: 0
  },
  computed: {
    totalproducts() {
      return this.products.reduce((sum, user) => {
        return sum + 1;
      }, 0);
    }
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updateImage: function(img) {
      this.image = img
    }
  },
  created() {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(json => {
        this.products = json.data;
      });
  }
});