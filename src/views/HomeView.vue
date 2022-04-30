<script setup>
import { onMounted, reactive } from "vue";
import InputBox from "../components/InputBox.vue";
import { useUserStore } from "../stores/user";
import { useCookies } from "vue3-cookies";
import { useRouter } from "vue-router";

const { cookies } = useCookies();
const router = useRouter();

onMounted(() => {
  if (!cookies.get("token")) {
    router.push("/login");
  }
});

const store = useUserStore();

let event = reactive({
  nickname_bride: "Mariam",
  nickname_groom: "Fariz",
});

let user = reactive({
  email: "",
  is_email_verified: true,
  phone: "",
  is_phone_verified: false,
});

const logout = async () => {
  await store.logout();
  cookies.remove("token");
  router.push("/login");
};

if (store.event) event = reactive(store.event);
if (store.user) user = reactive(store.user);
</script>

<template>
  <main
    class="grid grid-flow-row place-items-center justify-items-center gap-y-9 my-12"
  >
    <div class="relative w-full">
      <img
        src="../assets/34.png"
        alt="profile pic"
        class="rounded-full border-4 border-white p-1 top-10 mx-auto"
      />
      <h1 class="text-center text-[##5E6282] font-poppins text-3xl mt-3">
        {{ `${event.nickname_groom} &amp; ${event.nickname_bride}` }}
      </h1>
    </div>
    <div
      class="rounded-md bg-white py-9 px-8 flex flex-col md:flex-row gap-x-12 justify-center min-w-[50%]"
    >
      <InputBox
        title="Email"
        :inputValue="user.email"
        inputType="email"
        :isVerified="user.is_email_verified"
      />
      <InputBox
        title="Nomer Handphone"
        :inputValue="user.phone"
        inputType="number"
        :isVerified="user.is_phone_verified"
      />
    </div>
    <div class="w-full">
      <div
        @click="logout"
        class="flex justify-center items-center gap-x-2 cursor-pointer w-max mx-auto"
      >
        <div class="shutdown">
          <div class="inner"></div>
          <div class="sub-bar"></div>
          <div class="bar"></div>
        </div>
        <p class="font-poppins uppercase text-[#707C97]">Log Out</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.shutdown .inner {
  border: 2px solid #707c97;
  border-radius: 100px;
  height: 24px;
  position: relative;
  top: 8px;
  width: 24px;
}

.shutdown .bar {
  border-left: 3px solid #707c97;
  height: 15px;
  left: 11px;
  top: -18px;
  position: relative;
  width: 0;
}

.shutdown .sub-bar {
  border-left: 7px solid #f9f3f2;
  height: 34px;
  margin-left: 9px;
  margin-top: -38px;
  position: absolute;
  width: 0;
}
</style>
