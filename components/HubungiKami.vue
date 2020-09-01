<template>
  <div>
		<div v-if="isOpen" class="w-full h-full bg-gray-200 bg-opacity-50 fixed z-50">
			<div class="w-1/2 mx-auto my-48 bg-white p-8 rounded-lg shadow-xl">
				<div class="text-center relative">
					<button class="absolute right-0 top-0" @click="show">
            <svg
              class=""
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
						<img class="w-1/3 mx-auto" src="/sad.svg" alt="sad icon">
						<h1 class="text-heading text-indigo-500 font-bold capitalize">Oh no!</h1>
						<h5 class="text-base capitalize">Something goes wrong, please try again later.</h5>
					</div>
				</div>
			</div>
		</div>
		<button
			v-if="isOpen"
			@click="isOpen = false"
			class="fixed inset-0 w-full h-full z-40"
		></button>
    <div
      class="container lg:w-1/2 lg:py-8 lg:mb-4 mx-auto px-8 lg:px-16 my-20 lg:mt-48 lg:bg-white"
    >
      <h1 class="text-center font-bold text-heading text-indigo-500 my-8 capitalize">Hubungi Kami</h1>
      <p
        class="text-base text-center w-10/12 mx-auto"
      >Kami siap menjawab semua pertanyaanmu. Isi detail di bawah ini agar kami dapat menghubungimu atau kunjungi langsung Marketing Gallery kami.</p>
      <div class="w-full mt-8 p-8">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-1/3 px-3 mb-6 md:mb-0 relative">
            <select
              :class="{'border-red-600': (title === false)}"
              class="block appearance-none rounded-sm w-full bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
              ref="title"
							required
            >
              <option value>Gelar</option>
              <option value="Bapak.">Bapak</option>
              <option value="Ibu.">Ibu</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6 text-gray-700"
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
          <div class="w-2/3 px-3">
            <input
              :class="{'border-red-600': (name === false)}"
              class="appearance-none rounded-sm block w-full bg-white text-gray-700 border border-gray-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
              ref="name"
							required
              type="text"
              placeholder="Nama Lengkap Anda"
            />
						<p v-if="name === false" class="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
        </div>
        <div class="mb-6 relative">
          <select
            ref="purpose"
						required
            :class="{'border-red-600': (purpose === false)}"
            class="block appearance-none rounded-sm w-full bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
          >
            <option value>Saya Ingin</option>
            <option value="Membeli Unit">Membeli Unit</option>
            <option value="Mendapatkan Info Lebih">Mendapatkan Info Lebih</option>
            <option value="Melihat Price List">Melihat Price List</option>
            <option value="Mengunduh E-Brosur">Mengunduh E-Brosur</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
					<p v-if="purpose === false" class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="mb-6 relative">
          <input
            :class="{'border-red-600': (phone === false)}"
            class="appearance-none rounded-sm block w-full bg-white text-gray-700 border border-gray-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
            ref="phone"
						required
            type="number"
            placeholder="Nomor Telpon Anda"
          />
					<p v-if="phone === false" class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="mb-6 relative">
          <input
            :class="{'border-red-600': (email === false)}"
            class="appearance-none rounded-sm block w-full bg-white text-gray-700 border border-gray-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
            ref="email"
						required
            type="email"
            placeholder="Alamat Email Anda"
          />
					<p v-if="email === false" class="text-red-500 text-xs italic">Please enter a valid email address.</p>
        </div>
        <div class="mb-6 relative">
          <textarea
            :class="{'border-red-600': (note === false)}"
            class="appearance-none rounded-sm block w-full bg-white text-gray-700 border border-gray-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
            ref="note"
						required
            rows="3"
            placeholder="Catatan"
          ></textarea>
					<p v-if="note === false" class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="mt-8 w-full text-center">
          <button
            @click="handleClick"
            class="bg-orange-500 py-2 px-16 text-white font-bold uppercase text-base tracking-wide"
          >kirim</button>
        </div>
      </div>
    </div>
    <div class="w-1/2 mx-auto mt-16 mb-24">
      <h5
        class="text-xs lg:text-base font-bold text-black text-center my-4 uppercase tracking-wider mb-8"
      >marketing gallery</h5>
      <p
        class="text-xs lg:text-base text-black text-center my-4 capitalize tracking-wide mb-8 lg:mb-4"
      >Jl. Kemakmuran, Marga Jaya, Bekasi Selatan, Kota Bekasi, Jawa Barat 17141</p>
      <div class="block lg:flex lg:justify-center">
        <a
          class="text-xs lg:text-base tracking-wider hover:text-orange-500 uppercase text-black text-center my-4 lg:my-0 lg:mx-4 block"
          href="tel:+622139712888"
        >T: (021) 3971-2888</a>
        <a
          class="text-xs lg:text-base tracking-wider hover:text-orange-500 text-black text-center block lg:mx-4"
          href="mailto:sales@themajbekasi.com"
        >E: sales@themajbekasi.com</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
		show(){
			this.isOpen = !this.isOpen
		},
    handleClick(e) {
			e.preventDefault();
			const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      const data = {
        gelar: this.$refs.title.value,
        nama_lengkap: this.$refs.name.value,
        saya_ingin: this.$refs.purpose.value,
        nomor_telpon: this.$refs.phone.value,
        email: this.$refs.email.value,
        catatan: this.$refs.note.value,
      };
      if (data.gelar === null || data.gelar === "") {
        this.title = false;
      } else {
        this.title = true;
      }
      if (data.nama_lengkap === null || data.nama_lengkap === "") {
        this.name = false;
      } else {
        this.name = true;
      }
      if (data.saya_ingin === null || data.saya_ingin === "") {
        this.purpose = false;
      } else {
        this.purpose = true;
      }
      if (data.nomor_telpon === null || data.nomor_telpon === "") {
        this.phone = false;
      } else {
        this.phone = true;
      }
      if (data.email === null || data.email === "" || re.test(data.email) === false) {
        this.email = false;
      } else {
        this.email = true;
      }
      if (data.catatan === null || data.catatan === "") {
        this.note = false;
      } else {
        this.note = true;
			}
			if (this.title === true && this.name === true && this.purpose === true && this.phone === true && this.email === true && this.note === true) {
				this.$axios.$post('/contacts', data).then(() => {
					this.isOpen = true
				}).catch((err) => {
					this.error = err.data
					this.isOpen = true
				})
				
				this.$refs.title.value = ""
				this.$refs.name.value = ""
				this.$refs.purpose.value = ""
				this.$refs.phone.value = ""
				this.$refs.email.value = ""
				this.$refs.note.value = ""
			}
    },
  },
  data() {
    return {
			isOpen: false,
      title: true,
      name: true,
      purpose: true,
      phone: true,
      email: true,
			note: true,
			error: false,
    };
  },
};
</script>
<style lang="scss">
</style>