<template>
    <header>
        <h1>!סולידריות בפעולה: משימה אחת, אפשרויות רבות</h1>
        <nav>
            <a href="http://localhost:8080/App.vue" rel="noopener noreferrer" id="home">בית</a>
            <div id="products">
                <span @cliсk="showScrollList">מוצרים</span>
                <div :class="{scrollShower:shower}">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div id="servises">
                <span>שירותים</span>
                <div class="scroolList"></div>
            </div>
            <div>
                <span id="corp">עמותות</span>
                <div class="scroolList"></div>
            </div>
            <a href="" id="feet-backs">משתמשים מספרים</a>
            <a href="" id="articles">כתבות</a>
            <form action="" method="post">
                <input type="text" name="search" id="search">
                <input type="button" id="login" value="אזור אישי">
            </form>
        </nav>
    </header>
</template>
<script>
    export default {
  name: 'HeaderG',
  props: {
    msg: String
  },
  data() {
       return {
            shower: true,
        }
    },
    methods:{
        showScrollList(){
            this.shower = !this.shower;
        }
    }
}
</script>
<style scoped>
body{
    display: flex;
    justify-content: center;
}
#main-container {
    display: flex;
    justify-content: center;
    width: 97%;
    border-radius: 10px;
    flex-direction: column;
}

header {
    display: flex;
    background-color: rgb(171, 156, 238);
    flex-direction: column;
    align-items: center;
    width: -webkit-fill-available;
    border-radius: 10px;

}

h1 {
    color: #560d61;
    grid-area: h1;
}
/* NAV */
nav {
    border: 1px solid #560d61;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas:
        "home products servises corp feet-backs articles . form form form";
    height: 53px;
    align-content: center;
    justify-items: center;
    align-items: center;
    width: -webkit-fill-available;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    color: #560d61;

}

.scrollShower{
    display: none;
}
#home{
    grid-area: home;
}
#products {
    grid-area: products;
    cursor: pointer;
}

#servises {
    grid-area: servises;
    cursor: pointer;
}

#corp {
    grid-area: corp;
    cursor: pointer;
}

#feet-backs {
    grid-area: feet-backs;
}

#articles {
    grid-area: articles;
    gap: 10px;
}

nav form {
    grid-area: form;
    /* margin-right: 10px; */
}

#search {
    grid-area: search;
    /* margin-right: 10px; */
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#login {
    grid-area: login;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #337ab7;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    cursor: pointer;
}
</style>