<template>
  <div>
    <form action="" method="post">
      <input type="text" name="" id="" placeholder="מייל/שם משתמש"/>
      <input type="text" name="" id="" placeholder="סיסמה"/>
      <button type="submit">!יאללא</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "InitFiled",
  props:{
    userName: String,
    password: String,
  }
};
</script>

<style scoped>
div{
    transform: translate(40%, 50%);
    background-color: #cc95d6;
}
</style>