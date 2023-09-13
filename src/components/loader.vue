<template >
    <div class="mx-3 px-3 my-3">
    <div class="row   my-1  g-3">
        <div v-for="(item, index) in items" :key="index" class="col-md-6  col-lg-3">
        <div class="card" aria-hidden="true">
            <div class="placeholder-card-image spinner_p d-flex align-items-center img_ justify-content-center bg-light card-img-top">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>
            <div class="card-body">
            <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
            </p>
            <div class="d-flex gap-1">
                <Link href="#" tabindex="-1" className="btn  w-100  disabled placeholder col-6"></Link>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
  data() {
    return {
      items: Array(4).fill(0)
    };
  },
};
</script>

<style >
.read_more{
    color: #8b4513;
}
.spinner_p{
    height: 200px;
}
    
</style>