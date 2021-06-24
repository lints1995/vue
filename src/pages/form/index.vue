<template>
  <div>
    <c-form :model="userInfo" :rules="rules" ref="loginForm">
      <c-form-item label="用户名：" prop="userName">
        <c-input v-model="userInfo.userName" placeholder="请输入用户名" />
      </c-form-item>
      <c-form-item label="密码：" prop="passWord">
        <c-input
          v-model="userInfo.passWord"
          type="password"
          placeholder="请输入密码"
        />
      </c-form-item>
      <c-form-item>
        <button @click="login">登录</button>
      </c-form-item>
    </c-form>
  </div>
</template>

<script>
import CForm from "@/components/c-form/c-form.vue";
import CFormItem from "@/components/c-form/c-form-item.vue";
import CInput from "@/components/c-form/c-input.vue";
export default {
  components: {
    CForm,
    CFormItem,
    CInput,
  },
  data() {
    return {
      userInfo: {
        userName: "",
        passWord: "",
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        passWord: [
          {
            required: true,
            message: "请输入密码",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate((res) => {
        if (res) {
          alert("验证通过");
        } else {
          alert("验证失败");
        }
      });
    },
  },
};
</script>
