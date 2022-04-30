<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  inputType: {
    type: String,
    default: "text",
  },
  inputValue: {
    default: null,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <main>
    <h4>{{ title }}</h4>
    <input
      :type="inputType"
      :value="inputValue"
      class="form-input my-2"
      readonly
    />
    <div class="flex justify-end items-center gap-x-1">
      <span
        class="border-2 rounded-full px-[3px] text-xs"
        :class="
          isVerified
            ? 'text-[#34BE5B] border-[#34BE5B]'
            : 'text-[#D35959] border-[#D35959]'
        "
        >{{ isVerified ? "&#10004;" : "&#10006;" }}</span
      >
      <p>{{ isVerified ? "Verified" : "Not Verified" }}</p>
    </div>
  </main>
</template>
