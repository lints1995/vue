<template>
  <div>
    <c-form :model="userInfo" :rules="rules" ref="loginForm">
      <c-form-item label="用户名：" prop="username">
        <c-input v-model="userInfo.username" placeholder="请输入用户名" />
      </c-form-item>
      <c-form-item label="密码：" prop="password">
        <c-input
          v-model="userInfo.password"
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
import CForm from "@/components/c-form";
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
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate((res) => {
        const notice = this.$notice({
          title: "提示",
          message: res ? "验证通过" : "验证失败",
          duration: 1000,
        });
        notice.show();
      });
    },
  },
};
</script>
