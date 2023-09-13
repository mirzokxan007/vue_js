<template >
    <Header/>
    <div class="container">
        
        <div  class="container p-3  searc_part mx-3 my-3">
              <form  @submit.prevent="searchProducts" class="mx-3  ">
                <div class="input-group  mb-3">
                <input type="text"  v-model="searchTerm" class="form-control search_input" placeholder="Find what you want" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn search_btn btn-outline-secondary" type="submit">Button</button>
                </div>
                </div>
              </form>
            <div v-if="products && products.length > 0" >
                <ul>
                    <div  class="  px-3">
                <div  className="row right w-100 my-1  g-3">
                    <div v-for="product in products" :key="product.id" className="col-md-6  col-lg-3" key={index}>
                            <div className="card pro " aria-hidden="true">
                                <small class="m-2"><i class="fa-sharp fa-solid fa-globe" style="color: #8b4513"></i>:{{ product.volumeInfo.language }}</small>
                            <img 
                                className="placeholder-card-image card-img-top"
                                :src="product.volumeInfo.imageLinks.smallThumbnail"
                            />
                            <div className="card-body">
                                <h5 className="card-title text-truncate">{{ product.volumeInfo.title }}</h5>
                                <p className="card-text">
                                <span className="d-flex my-2 justify-content-between">
                                    <span class="bold">Publisher:</span>
                                    <span class="publisher w-50">
                                        {{ product.volumeInfo.publisher }}
                                    </span>
                                </span>
                                <span className="product-card-description">
                                    {{ product.volumeInfo.description }}
                                </span>
                                </p>
                                <div className="d-flex gap-1">
                                <a target="blank" :href="product.volumeInfo.previewLink"
                                    className="btn  read_btn w-100"
                                >
                                    Read More...
                                </a>
                                </div>
                            </div>
                            </div>
                    </div>
                    
                </div>

            </div>
                </ul>

            </div>
            <Loader v-else/>

        </div>
        
    </div>
    



</template>
<script>
import Header from '@/components/header_for_search.vue'
import Products from '@/components/products.vue'
import Loader from '@/components/loader.vue'
import axios from 'axios';
    export default {
        components:{
            Header,
            Products,
            Loader
        },
        data() {
            return {
            searchTerm: '',
            products: []
            }
        },
        methods: {
    searchProducts() {
        console.log(this.searchTerm);
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}`)
        .then(response => {
          this.products = response.data.items;
          console.log(this.products);
        })
        .catch(error => {
          console.log(error);
        });
    },
  }

    }

</script>
<style >
.search_input:focus{
    border:1px solid #8b451384;
    box-shadow: #8b451384  0px 4px 5px 0px;
}
.search_btn:hover{
    background-color: #8b451384;
    box-shadow: #8b451384  0px 4px 5px 0px;
    border:1px solid #8b451384;
}
.publisher{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.bold{
    font-weight: bold;
    color: #8b451384;
}
</style>


