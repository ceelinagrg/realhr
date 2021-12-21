<template>
  <div class="px-20 py-20 bg-blue-300">
    <div class="grid grid-cols-1 gap-4 py-14 px-12 bg-white">
      <div v-for="item in blogs" :key="item.id">
        <div class="container bg-gray-200 pt-4">
          <a :href="item.meta.html_url" class="text-blue-800 text-lg">{{
            item.title
          }}</a
          ><br />
          <div class="py-10 grid grid-cols-4">
            <div class="image">
              <a :href="item.meta.html_url" >
                <img class="ml-3" src="@/assets/realhr-cover.jpg" width="100" />
              </a>
            
          </div>
          <p class="col-span-3 text-left">{{ item.meta.intro }}</p>
          </div>
          <a :href="item.meta.html_url" class="btn btn-primary text-blue-800"
            >Readmore</a
          ><br /><br />
          
        </div>
      </div>
    </div>
  </div>
  <div></div>
  <div class="footer py-12 bg-blue-900">
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
import bloglist from "./data.json";
export default {
  props: ["slug"],
  data() {
    return {
      blog: bloglist,
      blogs: bloglist.items,
    };
  },
  mounted() {
    let slug = this.slug;
    this.blog = this.blogs.find((element) => element.meta.slug === slug);

    console.log(this.blog);
  },
};
</script>










