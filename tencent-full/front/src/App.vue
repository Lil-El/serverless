<template>
  <div>{{message}}</div>
</template>

<script>
import "../env";
export default {
  data() {
    return { message: "null" };
  },
  mounted() {
    fetch(window.env.apiUrl) // 这里的地址不确定，要在后端部署后才知道，这里使用api部署成功后的env
      .then(res => res.json())
      .then(result => {
        this.message = result.message;
      });
  }
};
</script>