
<template>
  <div id ="container">
    <h2 class="mt-4">Our Blogs</h2>
    <li class="list-none pb-40 pt-12 bg-gray-200 text-black">
      <div class="title ml-3 leading-8" v-for="item in result.items" :key="item.id">
        <router-link :to="{name:'BlogDetail', params:{slug:item.meta.slug}}" class="hover:text-red-500">
          {{item.title}}
        </router-link>
    </div>
    </li>  
</div>
  
  <div class="footer pt-12 absolute inset-x-0 bottom-0 bg-blue-900">
    <div class="row">
      <div class="column text-left text-white font-serif">
        <h2>Contact</h2>
        <p>01-4256781</p>
        <p>Email: realhr@gmail.com</p>
        <p>Address: Minbhawan, Kathmandu</p>
      </div>

      <div class="column text-left text-white font-serif">
        <h2>Links</h2>
        <p>FAQs</p>
        <p>Testomony</p>
      </div>

    <div class="column">
      <img src="@/assets/aayu.png" alt="Aayulogic" width=50%>
    </div>
    </div>
  </div>
  
</template>

<script>
import blogList from './data.json'

export default {
name: 'app',
components:{},
data(){
  return{
    result:blogList
  }
}
}
</script>





