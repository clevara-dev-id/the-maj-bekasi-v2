<template>
  <div class="px-32">
    <h5 class="font-base text-orange-500 gilroy-bold font-bold capitalize">Estimasi Cicilan Bulanan</h5>
    <h1 ref="estimasi" class="text-heading text-indigo-500 font-bold">IDR 18.046.057</h1>
    <div class="grid grid-cols-4 mt-20 items-center">
      <div class="col-span-1 text-lg proxima-nova capitalize">harga unit</div>
      <div class="col-span-1 text-lg proxima-nova capitalize">IDR {{rp_format(dataSimulations)}}</div>
      <div class="col-span-1 text-lg proxima-nova capitalize">tenor kredit</div>
      <div class="col-span-1 text-lg proxima-nova capitalize">
        <div class="relative">
          <select v-model="credit" @change="handleChange" ref="year" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tenor-kredit">
            <option value="1">1 Tahun</option>
            <option value="2">2 Tahun</option>
            <option value="3">3 Tahun</option>
            <option value="4">4 Tahun</option>
            <option value="5">5 Tahun</option>
            <option value="6">6 Tahun</option>
            <option value="7">7 Tahun</option>
            <option value="8">8 Tahun</option>
            <option value="9">9 Tahun</option>
            <option value="10">10 Tahun</option>
            <option value="11">11 Tahun</option>
            <option value="13">13 Tahun</option>
            <option value="14">14 Tahun</option>
            <option value="15">15 Tahun</option>
            <option value="16">16 Tahun</option>
            <option value="17">17 Tahun</option>
            <option value="18">18 Tahun</option>
            <option value="19">19 Tahun</option>
            <option value="20">20 Tahun</option>
            <option value="21">21 Tahun</option>
            <option value="22">22 Tahun</option>
            <option value="23">23 Tahun</option>
            <option value="24">24 Tahun</option>
            <option value="25">25 Tahun</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 mt-6 items-center">
      <div class="col-span-1 text-lg proxima-nova capitalize">DP 20%</div>
      <div class="col-span-1 text-lg proxima-nova capitalize">IDR {{rp_format(dataSimulations*20/100)}}</div>
      <div class="col-span-1 text-lg proxima-nova capitalize">Bunga</div>
      <div class="col-span-1 text-lg proxima-nova capitalize">
        <input v-model="interest" @change="handleChange" type="number" min="8" max="100" value="8" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
      </div>
    </div>
    <div class="grid grid-cols-4 mt-6 items-center">
      <div class="col-span-1 text-lg proxima-nova capitalize">Jumlah Pinjaman</div>
      <div class="col-span-1 text-lg proxima-nova capitalize">IDR {{rp_format(dataSimulations-(dataSimulations*20/100))}}</div>
      <div class="col-span-2 text-sm proxima-nova capitalize">* DP dapat dicicil. Angka yang tertera hanya untuk keperluan simulasi. Hubungi bank terkait untuk angka yang lebih akurat.</div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    dataSimulations: { type: String, default: null },
    dataIdentifier: { type: Number, default: null }
  },
  mounted(){
      let c = this.credit,
      i = (this.interest >=8 ? this.interest : 8)/100/12,
      l = this.dataSimulations-(this.dataSimulations*20/100),
      calc = ((l*i)/(1-(1+i)**(-c*12))+Number.EPSILON)*100
      let total = Math.round(calc/100)
      this.$refs.estimasi.innerHTML = `IDR ${this.rp_format(total)}`
  },
  methods:{
    rp_format(e){
      let reverse = e.toString().split('').reverse().join(''), thousand = reverse.match(/\d{1,3}/g);
      thousand = thousand.join('.').split('').reverse().join('');
      return thousand
    },
    handleChange(){
      let c = this.credit,
      i = (this.interest >=8 ? this.interest : 8)/100/12,
      l = this.dataSimulations-(this.dataSimulations*20/100),
      calc = ((l*i)/(1-(1+i)**(-c*12))+Number.EPSILON)*100
      let total = Math.round(calc/100)
      this.$refs.estimasi.innerHTML = `IDR ${this.rp_format(total)}`
    }
  },
  data() {
    return {
      credit:1,
      interest:8,
    }
  },
}
</script>
