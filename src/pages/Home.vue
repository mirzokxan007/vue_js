<template >
        <Header/>
    <div class="container">
        <div v-if="companies && companies.length > 0" class="container d-flex justify-content-between my-3">
            <div  class=" mx-3 px-3">
                <div  className="row right w-100 my-1  g-3">
                    <div v-for="company in companies" :key="company.id" className="col-md-6  col-lg-3" key={index}>
                            <div className="card pro " aria-hidden="true">
                                <small class="m-2"><i class="fa-sharp fa-solid fa-globe" style="color: #8b4513"></i>:{{ company.volumeInfo.language }}</small>
                            <img 
                                className="placeholder-card-image card-img-top"
                                :src="company.volumeInfo.imageLinks.smallThumbnail"
                            />
                            <div className="card-body">
                                <h5 className="card-title text-truncate">{{ company.volumeInfo.title }}</h5>
                                <p className="card-text">
                                    <span className="d-flex my-2 justify-content-between">
                                    <span class="bold">Publisher:</span>
                                    <span class="publisher w-50">
                                        {{ company.volumeInfo.publisher }}
                                    </span>
                                </span>
                                <span className="product-card-description">
                                    {{ company.volumeInfo.description }}
                                </span>
                                </p>
                                <div className="d-flex gap-1">
                                <a target="blank" :href="company.volumeInfo.previewLink"
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
            
            
        </div>
        <Loader v-else />

    </div>
</template>
<script>
  import { useRoute, useRouter } from "vue-router"
  import Header from "../components/Header.vue"
  import Products from "../components/Products.vue"
  import Loader from "../components/loader.vue"
  import axios from 'axios';

  export default {
    components: {
      Header,
      Products,
      Loader

    },
    setup() {
      const router = useRouter()

      if (!localStorage.getItem("token")) {
        router.push("/")
      }

    },
    data() {
    return {
      companies: []
    };
  },
  mounted() {
   let result = axios.get('https://www.googleapis.com/books/v1/volumes?q=programming')
      .then(response => {
        this.companies = response.data.items;
        console.log(this.companies);
      })
      .catch(error => {
        console.log(error);
      });
  }
  }
</script>

<style >
.left{
    overflow: scroll;
    height: 600px;
}
.read_btn{
    background-color:#8b4513 ;
    color:white
}
li{
    list-style: none;
}
    
</style>