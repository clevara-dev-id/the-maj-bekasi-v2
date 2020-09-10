<template>
  <div>
    <!-- MODAL COMPONENT -->
    <div v-if="isOpen" class="w-full h-full bg-gray-200 bg-opacity-50 fixed inset-0 z-50">
      <div class="w-1/2 mx-auto my-48 bg-white p-8 rounded-lg shadow-xl">
        <div class="text-center relative">
          <button class="absolute right-0 top-0" @click="show">
            <svg
              class
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5303 0.46967C15.2374 0.176777 14.7626 0.176777 14.4697 0.46967L8 6.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L6.93934 8L0.46967 14.4697C0.176777 14.7626 0.176777 15.2374 0.46967 15.5303C0.762563 15.8232 1.23744 15.8232 1.53033 15.5303L8 9.06066L14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L9.06066 8L15.5303 1.53033C15.8232 1.23744 15.8232 0.762563 15.5303 0.46967Z"
                fill="#232323"
              />
            </svg>
          </button>
          <div class="p-8" v-if="error === false">
            <h1 class="text-heading text-indigo-500 font-bold capitalize">Thank You!</h1>
            <h5 class="text-base capitalize">We'll get back to you as soon as possible</h5>
          </div>
          <div class="p-8" v-else>
            <img class="w-1/3 mx-auto" src="/sad.svg" alt="sad icon" />
            <h1 class="text-heading text-indigo-500 font-bold capitalize">Oh no!</h1>
            <h5 class="text-base capitalize">Something goes wrong, please try again later.</h5>
          </div>
        </div>
      </div>
    </div>
    <button v-if="isOpen" @click="isOpen = false" class="fixed inset-0 w-full h-full z-40"></button>
    <!-- FOOTER COMPONENT -->
    <div class="bg-black">
      <div class="container mx-auto px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20 lg:gap-4">
          <div class="lg:col-span-1">
            <img class="w-1/2" src="/logo-bw.svg" alt="the maj bekasi logo inverse" />
            <div class="flex justify-start my-8">
              <a :href="sm.link" target="_blank" v-for="(sm, index) in dataSocmed" :key="index" >
                <img class="mr-6" :src="`/footer/${sm.icon}.svg`" :alt="sm.name" />
              </a>
            </div>
            <img
              class="w-2/3 lg:w-2/3 mt-16 lg:mt-32"
              src="/footer/tmg-white.svg"
              alt="the maj group"
            />
          </div>
          <div class="lg:col-span-1 lg:pl-8">
            <h5 class="text-sm text-white uppercase font-bold mb-8">join our family</h5>
            <nuxt-link
              class="text-white hover:text-orange-500 block my-2"
              to="/careers"
            >Careers</nuxt-link>
            <nuxt-link
              class="text-white hover:text-orange-500 block my-2"
              to="/investors"
            >Investors</nuxt-link>
          </div>
          <div class="text-white lg:col-span-1">
            <h5 class="text-sm text-white uppercase font-bold mb-8">explore our world</h5>
            <nuxt-link
              class="text-white hover:text-orange-500 block my-2 capitalize"
              to="/hubungi-kami"
            >contact us</nuxt-link>
            <nuxt-link
              class="text-white hover:text-orange-500 block my-2 capitalize"
              to="/capital-amangement"
            >Ancora Capital Management</nuxt-link>
            <nuxt-link
              class="text-white hover:text-orange-500 block my-2 capitalize"
              to="/media-center"
            >Media Center</nuxt-link>
            <nuxt-link
              class="text-white hover:text-orange-500 block my-2 capitalize"
              to="/privasi"
            >Privacy</nuxt-link>
            <nuxt-link
              class="text-white hover:text-orange-500 block my-2 capitalize"
              to="/terms-and-condition"
            >terms and conditions</nuxt-link>
          </div>
          <div class="text-white md:col-span-3 lg:col-span-2">
            <h5 class="text-sm text-white uppercase font-bold mb-8 tracking-widest">Subscribe for the MAJ GROUP Exclusive news & Offers</h5>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/5 lg:w-1/3 px-3 mb-6">
                <div class="relative">
                  <select
                    :class="{'border-red-600': (title === false)}"
                    class="block appearance-none w-full bg-white border border-white text-gray-700 py-3 px-4 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    ref="footerTitle"
                    required
                  >
                    <option value>Title</option>
                    <option value="Bapak">Bapak</option>
                    <option value="Ibu">Ibu</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                  <p
                    v-if="title === false"
                    class="text-red-500 text-xs italic"
                  >Please fill out this field.</p>
                </div>
              </div>
              <div class="w-full md:w-2/5 lg:w-2/3 px-3 mb-6">
                <input
                  :class="{'border-red-600': (name === false)}"
                  class="appearance-none block w-full bg-white text-gray-700 border border-white rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ref="footerName"
                  type="text"
                  required
                  placeholder="Fullname"
                />
                <p
                  v-if="name === false"
                  class="text-red-500 text-xs italic"
                >Please fill out this field.</p>
              </div>
              <!-- TABLET EMAIL -->
              <div class="w-2/5 px-3 mb-6 hidden md:block lg:hidden">
                <input
                  :class="{'border-red-600': (email === false)}"
                  class="appearance-none block w-full bg-white text-gray-700 border border-white rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ref="footerEmail"
                  type="email"
                  required
                  placeholder="Email"
                />
                <p
                  v-if="email === false"
                  class="text-red-500 text-xs italic"
                >Please enter a valid email address.</p>
              </div>
            </div>
            <!-- SMALL AND LARGE EMAIL -->
            <div class="w-full mb-6 block md:hidden lg:block">
              <input
                :class="{'border-red-600': (email === false)}"
                class="appearance-none block w-full bg-white text-gray-700 border border-white rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ref="footerEmail"
                type="email"
                required
                placeholder="Email"
              />
              <p
                v-if="email === false"
                class="text-red-500 text-xs italic"
              >Please enter a valid email address.</p>
            </div>
            <div class="block md:flex lg:block">
              <button
                @click="handleClick"
                type="submit"
                class="py-3 px-8 text-xxs text-black tracking-widest bg-white uppercase font-bold hover:bg-orange-500 hover:text-white"
              >subscribe</button>
              <p class="mt-4 md:mt-1 lg:mt-4 ml-0 md:ml-16 lg:ml-0 text-white proxima-nova text-xxs">
                By entering your details you consent to be contacted via email by the MAJ group with offers and updates. To opt out, use the unsubscribe link or email
                <a
                  class="text-white hover:text-orange-500"
                  href="mailto:unsubscribe@themajgroup.com"
                >unsubscribe@themajgroup.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="py-4 text-sm text-white text-center capitalize"
      >Copyright &copy; 2020 All rights reserved</div>
    </div>
  </div>
</template>
<script>
export default {
  props:['dataSocmed'],
  methods: {
    show() {
      this.isOpen = !this.isOpen;
    },
    handleClick(e) {
      e.preventDefault();
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const data = {
        gelar: this.$refs.footerTitle.value,
        name: this.$refs.footerName.value,
        email: this.$refs.footerEmail.value,
      };
      if (data.gelar === null || data.gelar === "") {
        this.title = false;
      } else {
        this.title = true;
      }
      if (data.name === null || data.name === "") {
        this.name = false;
      } else {
        this.name = true;
      }
      if (
        data.email === null ||
        data.email === "" ||
        re.test(data.email) === false
      ) {
        this.email = false;
      } else {
        this.email = true;
      }
      if (this.title === true && this.name === true && this.email === true) {
        this.$axios
          .$post("/subscribe", data)
          .then(() => {
            this.isOpen = true;
          })
          .catch((err) => {
            this.error = err.data;
            this.isOpen = true;
          });

        this.$refs.footerTitle.value = "";
        this.$refs.footerName.value = "";
        this.$refs.footerEmail.value = "";
      }
      console.log(JSON.stringify(data));
    },
  },
  data() {
    return {
      socialmedia: 'default',
      isOpen: false,
      error: false,
      title: true,
      name: true,
      email: true,
    };
  },
};
</script>
<style lang="scss">
</style>