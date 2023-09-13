<template >
    <div>
        <header className=" shadow sticky-top  py-3">
        <nav className="container d-flex align-items-center justify-content-between">
            <ul className="list-unstyled d-flex align-items-center gap-3 m-0">
                <li >
                    <button   className='btn search  fs-4 '> 
                        <a class="href" href="#/home">
                            <i class="fa-sharp fa-solid fa-backward" style="color: #8b4513;"></i>
                            Back 
                        </a>
                    </button>
                </li>
            </ul>
            <h1 class="w-25 logo my-2 text-center">BookStore</h1>
            <button   className='btn search  fs-4 '> 
                        <a class="href" href="#/home">
                           Find 
                            <i class="fa-solid fa-magnifying-glass" style="color: #8b4513;"></i>
                        </a>
            </button>
        </nav>
    </header>
    </div>
</template>
<script>
export default {
    
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