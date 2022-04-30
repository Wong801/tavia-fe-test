<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useUserStore } from "../stores/user";
import FormLogin from "../components/FormLogin.vue";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
const router = useRouter();

onMounted(() => {
  if (cookies.get("token")) {
    router.push("/");
  }
});

if (cookies.get("token")) {
  router.push("/");
}

const store = useUserStore();

const isShow = ref("login");

const login = async (payload) => {
  if (await store.login(payload)) {
    if (store.user) store.user.token = store.token;
    cookies.set("token", store.token);
    router.push("/");
  }
};

const register = async (payload) => {
  if (await store.register(payload)) {
    const loginPayload = {
      _method: "post",
      email: payload.email,
      password: payload.password,
    };
    await login(loginPayload);
  }
};

const token = store.token;
</script>

<template>
  <main>
    <div
      class="flex md:flex-row flex-col justify-between relative w-screen pb-24"
    >
      <FormLogin
        @login="login"
        class="px-12 xl:pl-[6.875rem] xl:pr-[11.5rem] pt-8 md:pl-20 md:pr-24 md:block"
        :class="{ hidden: isShow !== 'login' }"
        title="Masuk"
        :msg="'Masuk, dan buat undangan pernikahan kamu,\nkemudian share undangan kamu,'"
      />
      <span id="divider"></span>
      <FormLogin
        @register="register"
        class="md:text-right px-12 xl:pl-[11.5rem] xl:pr-[6.875rem] pt-8 md:pl-24 md:pr-20 md:block"
        :class="{ hidden: isShow !== 'register' }"
        title="Daftar"
        msg="Buat Undangan Pernikahan Digital Kamu dengan elegan,"
        boldMsg="your alternative wedding invitation"
        :register="true"
      />
      <button
        @click="isShow === 'login' ? (isShow = 'register') : (isShow = 'login')"
        class="block md:hidden underline my-8 text-left px-12 capitalize text-[#D5A26E] font-semibold font-poppins"
      >
        {{ isShow === "login" ? "daftar" : "masuk" }}
      </button>
    </div>
    {{ token }}
  </main>
</template>

<style scoped>
#divider {
  border-left: 1px solid #cdcdcd;
  height: 600px;
  position: absolute;
  left: 50%;
  right: 50%;
  top: 0;
}

@media (max-width: 768px) {
  #divider {
    display: none;
  }
}
</style>
