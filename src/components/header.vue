<template >
    <div>
        <header className=" shadow sticky-top  py-3">
        <nav className="container d-flex align-items-center justify-content-between">
            <ul className="list-unstyled d-flex align-items-center gap-3 m-0">
                <li >
                    <button   className='btn search  fs-4 '> 
                        <a class="href" href="#/search">
                            <i class="fa-sharp mx-2 fa-solid fa-magnifying-glass" style="color: #8b4513;"></i>
                            Search books
                        </a>
                    </button>
                </li>
            </ul>
            <h1 class="w-50 logo my-2 text-center">BookStore</h1>
            <ul className="list-unstyled d-flex align-items-center gap-3 m-0">
                <li><button @click="handleLogout"   className='btn  fs-4 '> <i class="fa-solid fa-arrow-right-from-bracket" style="color: #8b4513;"></i></button></li>
            </ul>
        </nav>
    </header>
    </div>
</template>
<script>
  import { useRoute, useRouter } from "vue-router"
  import { computed } from "vue"
  import {useToast} from 'vue-toast-notification';
  import 'vue-toast-notification/dist/theme-sugar.css';
  import { useStore } from "vuex"

  export default {
    setup() {
      const router = useRouter()
      const route = useRoute()
      const store = useStore()
      const $toast = useToast()

      function handleLogout() {
        localStorage.removeItem("token")
        $toast.info("Logged out")
        router.push("/")
      }

      return {
        handleLogout,
      }
    },
  }
</script>

<style >
.logo{
    color:#8b4513 ;
    font-family: 'Akaya Kanadaka', cursive;
    font-family: 'Kalam', cursive;
}
.search{
    font-size: 10px;
    color:#8b4513;
    font-family: 'Akaya Kanadaka', cursive;
    font-family: 'Kalam', cursive;
}
.href{
    color:#8b4513;
}
    
</style>