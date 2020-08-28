<template>
  <div class="bg-black">
    <div class="container mx-auto px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-20 lg:gap-4">
        <div class="lg:col-span-2">
          <img class="w-1/2" src="/logo-bw.svg" alt="the maj bekasi logo inverse" />
          <div class="flex justify-start my-8">
            <nuxt-link to="http://instagram.com">
              <img class="mr-6" src="/footer/icon.svg" alt="icon" />
            </nuxt-link>
            <nuxt-link to="http://facebook.com">
              <img class="mr-6" src="/footer/icon-1.svg" alt="icon" />
            </nuxt-link>
            <nuxt-link to="http://twitter.com">
              <img class="mr-6" src="/footer/icon-2.svg" alt="icon" />
            </nuxt-link>
          </div>
          <img class="w-1/2 lg:w-2/3 mt-16 lg:mt-32" src="/footer/the-maj-group.svg" alt="the maj group" />
        </div>
        <div class="lg:col-span-1">
          <h5 class="text-sm text-white uppercase font-bold mb-8">join our family</h5>
          <nuxt-link
            class="text-lg text-white hover:text-orange-500 block my-2"
            to="/careers"
          >Careers</nuxt-link>
          <nuxt-link
            class="text-lg text-white hover:text-orange-500 block my-2"
            to="/investors"
          >Investors</nuxt-link>
        </div>
        <div class="text-white lg:col-span-1">
          <h5 class="text-sm text-white uppercase font-bold mb-8">explore our world</h5>
          <nuxt-link
            class="text-lg text-white hover:text-orange-500 block my-2 capitalize"
            to="/hubungi-kami"
          >contact us</nuxt-link>
          <nuxt-link
            class="text-lg text-white hover:text-orange-500 block my-2 capitalize"
            to="/#"
          >Ancora Capital Management</nuxt-link>
          <nuxt-link
            class="text-lg text-white hover:text-orange-500 block my-2 capitalize"
            to="/#"
          >Media Center</nuxt-link>
          <nuxt-link
            class="text-lg text-white hover:text-orange-500 block my-2 capitalize"
            to="/privasi"
          >Privacy</nuxt-link>
          <nuxt-link
            class="text-lg text-white hover:text-orange-500 block my-2 capitalize"
            to="/terms-and-condition"
          >terms and conditions</nuxt-link>
        </div>
        <div class="text-white lg:col-span-2">
          <h5 class="text-sm text-white uppercase font-bold mb-8">explore our world</h5>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-1/3 px-3 mb-6">
              <div class="relative">
                <select
                  :class="{'border-red-600': (title === false)}"
                  class="block appearance-none w-full bg-white border border-white text-gray-700 py-3 px-4 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									ref="footerTitle"
                  required
                >
                  <option value>Gelar</option>
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
                <p v-if="title === false" class="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
            </div>
            <div class="w-2/3 px-3 mb-6">
              <input
                :class="{'border-red-600': (name === false)}"
                class="appearance-none block w-full bg-white text-gray-700 border border-white rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								ref="footerName"
                type="text"
                required
                placeholder="Fullname"
              />
              <p v-if="name === false" class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
          </div>
          <div class="w-full mb-6">
            <input
              :class="{'border-red-600': (email === false)}"
              class="appearance-none block w-full bg-white text-gray-700 border border-white rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							ref="footerEmail"
              type="email"
              required
              placeholder="Email"
            />
            <p v-if="email === false" class="text-red-500 text-xs italic">Please enter a valid email address.</p>
          </div>
					<button @click="handleClick" type="submit" class="py-2 px-8 text-black text-sm tracking-widest bg-white uppercase font-bold hover:bg-orange-500 hover:text-white">subscribe</button>
					<p class="mt-4 text-white">By entering your details you consent to be contacted via email by the Belmond group with offers and updates. To opt out, use the unsubscribe link or email <a class="text-white hover:text-orange-500" href="mailto:unsubscribe@themajgroup.com">unsubscribe@themajgroup.com</a>. </p>
        </div>
      </div>
    </div>
		<div class="py-4 text-sm text-white text-center capitalize">
				Copyright &copy; 2020 All rights reserved
		</div>
  </div>
</template>
<script>
export default {
  methods:{
    show(){
      this.isOpen = !this.isOpen
    },
    handleClick(e){
      e.preventDefault();
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const data = {
        gelar: this.$refs.footerTitle.value,
        name: this.$refs.footerName.value,
        email: this.$refs.footerEmail.value
      }
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
      if (data.email === null || data.email === "" || re.test(data.email) === false) {
        this.email = false;
      } else {
        this.email = true;
      }
			if (this.title === true && this.name === true && this.email === true) {
				this.$axios.$post('http://localhost:8000/subscribe', data).then(() => {
					this.isOpen = true
				}).catch((err) => {
					this.error = err.data
					this.isOpen = true
				})
				
				this.$refs.footerTitle.value = ""
				this.$refs.footerName.value = ""
				this.$refs.footerEmail.value = ""
      }
      console.log(JSON.stringify(data))
    }
  },
  data() {
    return {
      isOpen: false,
      error: false,
      title: true,
      name: true,
      email: true
    }
  },
};
</script>
<style lang="scss">
</style>