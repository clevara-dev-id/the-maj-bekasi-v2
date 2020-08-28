<template>
  <div class="pt-8">
    <div v-for="about in abouts" :key="about.id" class="my-16">
      <!-- <div class="w-full" :style="`background: url(http://localhost:8000/storage/${about.image}) center center / cover no-repeat; height:300px`"></div> -->
      <div class="bg-white">
        <img
          class="w-full lg:container lg:mx-auto lg:px-16"
          :src="`http://localhost:8000/storage/${about.image}`"
          alt="hero about us"
        />
        <div class="pt-4 pb-32 container mx-auto px-8 mb-24">
          <h1
            class="text-heading text-center font-bold text-indigo-500 capitalize my-12"
          >tentang kami</h1>
          <p class="text-justify text-base text-black">{{about.tentang_kami}}</p>
        </div>
      </div>
      <h1 class="text-center text-heading text-indigo-500 font-bold my-8">Visi Kami</h1>
      <div
        class="py-12 lg:container lg:mx-auto lg:px-16"
        v-for="(vs, index) in about.visions"
        :key="vs.id"
      >
        <div class="bg-white lg:shadow-lg py-16 px-8 relative">
          <img
            :class="index === 1 ? 'lg:mr-24 lg:ml-auto' : 'lg:mr-auto lg:ml-24'"
            class="mx-auto rounded-full h-16 w-16 border-2 border-orange-500 -mt-24 mb-16"
            :src="`http://localhost:8000/storage/${vs.image}`"
            :alt="vs.name"
          />
          <p class="text-base">{{vs.vision}}</p>
          <h5 class="text-base mt-24">{{vs.name}}</h5>
          <h5 class="text-base font-bold uppercase tracking-widest">{{vs.company_name}}</h5>
        </div>
      </div>
    </div>
    <div class="bg-white py-24">
      <Partner :data-partners="partners" />
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    let a = await $axios.get("/about-bekasi").then(res => {return res.data});
    let b = await $axios.get("/partnership").then(res => {return res.data});
    return {
      abouts: a,
      partners: b
    }
  },
  // asyncData({$axios}) {
    
  // },
  data() {
    return {
      // abouts: [
      //   {
      //     id: 1,
      //     tentang_kami:
      //       "The MAJ Residences Bekasi adalah apartemen kualitas Jepang dengan harga yang sangat kompetitif.  Fasilitas yang beragam dan dirancang untuk memanjakan penghuni di antaranya: kolam renang ukuran olimpiade, tempat bersantai di puncak gedung (sky lounge), area kerja bersama (co-working space), lobby yang megah dan luas, pusat kebugaran dan halte khusus transportasi online. Pembangunan apartemen akan dilakukan dalam 2 tahap: tahap pertama akan dibangun 1668 unit. Selain lokasi yang strategis, Bekasi menjadi primadona saat ini untuk kepemilikan hunian baru karena faktor ketersediaan lahan dan biaya hidup yang lebih memadai. Dengan harga yang tak tertandingi, menjadikan The MAJ Residence Bekasi pilihan investasi favorit kaum milenial untuk tinggal. Keuntungan nilai jual masa depan (capital gain) dan keuntungan harga sewa (rental yield) juga dapat diprediksikan akan meningkat signifikan.",
      //     created_at: "2020-03-16 11:38:00",
      //     updated_at: "2020-03-27 23:18:56",
      //     image: "bekasi-abouts\\March2020\\zehKfP95HF0Xu5iJfX2v.png",
      //     visions: [
      //       {
      //         id: 1,
      //         image: "bekasi-abouts-visions/April2020/CuLzbBjVDl7Gol8lCHo1.jpg",
      //         vision:
      //           "The MAJ Residence Bekasi dirancang dengan tujuan membuat hunian berkualitas yang dapat diakses oleh lebih banyak orang, terutama generasi milenial. Namun tak kalah pentingnya dengan harga yang kompetitif adalah menghadirkan hunian yang sarat dengan sense of community di mana mereka dapat menemukan makna.\r\n\r\nThere is no place like home. Membangun tempat tinggal yang sesuai dengan kebutuhan generasi muda adalah langkah awal kita bersama-sama memajukan bangsa melalui sumber daya manusia yang berdaya saing.",
      //         created_at: "2020-03-21 12:40:00",
      //         updated_at: "2020-04-16 15:00:58",
      //         bekasi_about_id: 1,
      //         name: "Gita Wirjawan",
      //         company_name: "The MAJ Group",
      //       },
      //       {
      //         id: 2,
      //         image: "bekasi-abouts-visions/April2020/bDPQUXK7HufeiuFIvF37.jpg",
      //         vision:
      //           "The MAJ Residence Bekasi merupakan sebuah proyek kolaborasi antara Indonesia dan Jepang.\r\n\r\nKami bertujuan menghadirkan desain, perencanaan, dan manajemen pembangunan yang teliti dan berkualitas di gedung apartemen kami tanpa melupakan aspek detail, budaya, dan keseharian di Indonesia.\r\n\r\nKami ingin The MAJ Residence Bekasi menjadi mitra terpercaya penduduk global dalam mewujudkan mimpi mereka memiliki hunian dengan kualitas hidup terbaik di Indonesia.",
      //         created_at: "2020-03-21 12:41:00",
      //         updated_at: "2020-04-16 15:00:36",
      //         bekasi_about_id: 1,
      //         name: "Takahiro Ando",
      //         company_name: "Leopalace 21",
      //       },
      //     ],
      //   },
      // ],
    };
  },
};
</script>
<style lang="scss">
</style>