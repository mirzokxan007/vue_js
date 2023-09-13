<template >
    <div className='min-vh-100 d-flex align-items-center justify-content-center text-bg-light'>
      <form @submit.prevent="handleLogin"  className='shadow form bg-white w-50 my-3 p-3 '>
         <h1 className="d-3 text-center "><i class="fa-solid fa-2x fa-user" style="color: #FFC861"></i></h1>
         <div className="my-3">
             <label className='form-label' htmlFor="email">Your email</label>
             <input v-model="values.email"  className='form-control' type="email" name='email' id="email" />   
         </div>
         <div className="my-3">
             <label className='form-label' htmlFor="password">Your password</label>
             <input v-model="values.password" required  min={4} className='form-control'  name='password' id="password" /> 
         </div>
         <div className="mt-3">
             <button  className='btn log-btn  btn-warning d-block fs-3 w-100'><a  href="#/">Login</a></button>
         </div>
      </form>
     </div>
 </template>
 <script>
 import { ref } from 'vue';
 import { onMounted } from "vue"
 import {useToast} from 'vue-toast-notification';
 import 'vue-toast-notification/dist/theme-sugar.css';
 import axios from 'axios';
 import { useRouter } from 'vue-router';

 export default {
    setup() {
    const values = ref({ email: '', password: '' });
    const checktype = ref('password');
    const $toast = useToast();
    const router = useRouter();

    onMounted(() => {
      let token = localStorage.getItem("token")
      if(token) router.push("/home")
    })

    async function handleLogin() {
      try {
        const response = await axios.post('https://reqres.in/api/login', values.value);
        console.log(response);
        if (response.status === 200) {
          $toast.success('Logged successfuly')
          localStorage.setItem('token', response.data.token);
          router.push('/home');
        }
      } catch (error) {
         $toast.error('user not found')
      } finally {
        values.value.email = '';
        values.value.password = '';
      }
    }

    return {
      values,
      checktype,
      handleLogin,
    };
  },

    }

 </script>
 <style >
 a{
     text-decoration: none;
     color: black;
 }
 .form{
     border-radius: 10px;
 }
 .log-btn{
     background-color:#FFC861;
 }
     
 </style>