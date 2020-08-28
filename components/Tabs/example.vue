<template>
  <div>
    <t-tabs>
      <template v-for="(d, i) in data">
        <t-tab v-bind:name="d.studio_name" v-bind:key="i">
          <t-tabs>
            <t-tab v-for="(c, idx) in d.childs" v-bind:key="idx" v-bind:name="c.title">
              {{ c.data }}
            </t-tab>
          </t-tabs>
        </t-tab>
      </template>
    </t-tabs>
  </div>
</template>
<script>
const components = {
  tTabs: () => import('@/components/Tabs/Tabs.vue'),
  tTab: () => import('@/components/Tabs/Tab.vue')
}
export default {
  components,

  data () {
    return {
      data: [
        {
          id: 1,
          studio_name: "studio A",
          childs: [{
            title: "spesification studio A",
            data: ['2 kamar tidur spesification studio A'],
          },{
            title: 'preview unit studio A',
            data: ['2 kamar tidur preview unit studio A'],
          },{
            title: '360 view studio A',
            data: ['2 kamar tidur 360 view studio A'],
          }]
        },
        {
          id: 2,
          studio_name: "studio b",
          childs: [{
            title: "spesification studio b",
            data: ['2 kamar tidur spesification studio b'],
          },{
            title: 'preview unit studio b',
            data: ['2 kamar tidur preview unit studio b'],
          },{
            title: '360 view studio b',
            data: ['2 kamar tidur 360 view studio b'],
          }]
        },
        {
          id: 3,
          studio_name: "studio c",
          childs: [{
            title: "spesification studio c",
            data: ['2 kamar tidur spesification studio c'],
          },{
            title: 'preview unit studio c',
            data: ['2 kamar tidur preview unit studio c'],
          },{
            title: '360 view studio c',
            data: ['2 kamar tidur 360 view studio c studio c'],
          }]
        }
      ]
    }
  }
}
</script>
<style>
</style>