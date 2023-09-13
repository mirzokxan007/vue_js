<template >
    <div>
        <div className="row right w-100 my-1  g-3">
            <div v-for="company in companies" :key="company.id" className="col-md-6  col-lg-3" key={index}>
                    <div className="card pro " aria-hidden="true">
                    <img 
                        className="placeholder-card-image card-img-top"
                        :src="company.volumeInfo.imageLinks.smallThumbnail"
                    />
                    <div className="card-body">
                        <h5 className="card-title text-truncate">s</h5>
                        <p className="card-text">
                        <span className="d-flex justify-content-between">
                            <span>{{ company.id }}</span>
                            <span>
                            <i className="fa-solid fa-star text-warning"></i>
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
</template>
<script>
import axios from 'axios';
export default {
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
};
</script>


<style >
.read_btn{
    background-color:#8b4513 ;
    color:white
}
.pro:hover{
    box-shadow: #8b451384  0px 8px 10px 0px;
    transition: 0.5s ease-in-out;
}
.product-card-description{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.placeholder-card-image {
    height: 300px;
}
</style>