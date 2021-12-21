<template>
  <nav
    class="bg-blue-700  px-2 sm:px-4 py-2.5 dark:bg-white-800"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div class="flex md:order-2">
        <div class="relative hidden mr-3 md:mr-0 md:block">
          <div
            class="
              absolute
              inset-y-0
              left-0
              flex
              items-center
              pl-3
              pointer-events-none
            "
          >
            
          </div>
        </div>
        
      </div>
      <div
        class="
          items-center
          justify-between
          hidden
          w-full
          md:flex md:w-auto md:order-1
        "
        id="mobile-menu-3"
      >
        <ul
          class="
            flex flex-col
            mt-0
            md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
          "
        >
          <li>
            <router-link to="/"  class="
               
                py-0
                pl-3
                pr-4
                text-white
                hover:text-red-400
                
              ">Home</router-link>
            
          </li>
          <li>
            <router-link to="/blog"
              class="
   
                py-0
                pl-3
                pr-4
                text-white
                hover:text-red-400
            
                
              ">Blog</router-link>
           
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
 #app {  
   font-family: Avenir, Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

}

</style>

