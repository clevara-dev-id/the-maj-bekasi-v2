<template>
  <component
    v-bind:is="tag"
    v-show="isActive"
    :aria-hidden="! isActive"
    class="tabs-component-panel w-full"
    :id="computedId"
    role="tabpanel"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    id: { default: null },
    name: { required: true },
    prefix: { default: "" },
    suffix: { default: "" },
    isDisabled: { default: false },
    tag: { type: String, default: "section" },
  },
  data: () => ({
    isActive: false,
    isVisible: true,
  }),
  computed: {
    header() {
      return this.prefix + this.name + this.suffix;
    },
    computedId() {
      return this.id ? this.id : this.name.toLowerCase().replace(/ /g, "-");
    },
    hash() {
      if (this.isDisabled) {
        return "#";
      }
      return "#" + this.computedId;
    },
  },
};
</script>