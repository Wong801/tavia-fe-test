<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
  boldMsg: {
    type: String,
    default: null,
  },
  register: {
    type: Boolean,
    default: false,
  },
});

const email = ref("");
const phone = ref("");
const groom = ref("");
const bride = ref("");
const password = ref("");
const showPassword = ref(false);

const emits = defineEmits(["login", "register"]);

const submitForm = () => {
  if (props.register) {
    emits("register", {
      _method: "post",
      email: email.value,
      phone: phone.value.toString(),
      groom: groom.value,
      bride: bride.value,
      password: password.value,
    });
  } else {
    emits("login", {
      _method: "post",
      email: email.value,
      password: password.value,
    });
  }
};
</script>

<template>
  <main class="flex flex-col w-full">
    <h1 class="text-[#8A7F77] font-bold text-3xl">{{ title }}</h1>
    <div class="py-2 md:py-3 lg:py-4 2xl:py-5">
      <p class="whitespace-pre">{{ msg }}</p>
      <p v-if="boldMsg" class="font-medium">
        {{ boldMsg }}
      </p>
    </div>
    <form
      @submit.prevent="submitForm"
      class="grid grid-flow-row"
      :class="
        register
          ? ' gap-y-2 md:gap-y-3 2xl:gap-y-4'
          : ' gap-y-2 md:gap-y-3 lg:gap-y-4 2xl:gap-y-5'
      "
    >
      <input
        class="form-input"
        v-model="email"
        type="email"
        name="email"
        placeholder="Alamat Email"
        required
      />
      <input
        v-if="register"
        v-model="phone"
        class="form-input"
        type="number"
        name="phone"
        placeholder="Nomor HP"
      />
      <input
        v-if="register"
        v-model="groom"
        class="form-input"
        type="text"
        name="groom"
        placeholder="Nama Panggilan Laki-Laki"
      />
      <input
        v-if="register"
        v-model="bride"
        class="form-input"
        type="text"
        name="bride"
        placeholder="Nama Panggilan Perempuan"
      />
      <div class="w-full relative">
        <input
          class="form-input w-full"
          v-model="password"
          :type="!showPassword ? 'password' : 'text'"
          name="password"
          placeholder="Password"
          minlength="4"
          required
        />
        <span
          @click="showPassword = !showPassword"
          class="absolute right-4 z-10 inset-y-1/4 font-montserrat md:text-base xl:text-sm font-bold text-[#8E8585] cursor-pointer"
        >
          SHOW
        </span>
      </div>
      <div v-if="!register" class="flex justify-between items-center">
        <RouterLink
          to="/lupa-password"
          class="uppercase font-poppins text-base md:text-sm 2xl:text-base text-[#D5A26E] leading-6"
          >Lupa Password?</RouterLink
        >
        <button
          type="submit"
          class="uppercase bg-[#D5A26E] py-2 md:py-3 lg:py-4 2xl:py-5 px-8 md:px-6 lg:px-10 2xl:px-20 text-base md:text-sm 2xl:text-base font-bold leading-5 text-white rounded-md shadow-[4px_6px_#A99782]"
        >
          Sign In
        </button>
      </div>
      <button
        v-else
        type="submit"
        class="uppercase bg-[#D5A26E] py-2 md:py-3 lg:py-4 2xl:py-5 px-4 md:px-3 lg:px-6 2xl:px-8 text-base md:text-sm 2xl:text-base font-bold leading-5 text-white rounded-md shadow-[4px_6px_#A99782] flex justify-between items-center"
      >
        BUAT UNDANGANMU SEKARANG
        <span class="text-white">&#8594;</span>
      </button>
    </form>
  </main>
</template>
