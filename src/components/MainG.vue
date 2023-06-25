<template>
  <main>
    <article id="about">
      <p>
        מטרת האתר היא ליצור סביבה של אינטראקציה הנוחה באותה מידה לשני הצדדים, הן
        לבעל הגמ"ח והן למשתמשים בו. הרעיון החדשני של האתר מבוסס על ההנחה שאם
        תינתן לאנשים הזדמנות להשיג דיסקרטיות מלאה או יחסית, רבים מאלה שלא היו
        עושים גמ"ח בשל וויתור על הפרטיות, יוכלו כעת לפתוח גמ"ח לעזור לאנשים
        שמשתמשים בו ובכך לעזור לעצמם לממש את עצמם ולהרגיש את עצמו כחבר פעיל
        ובלתי נפרד בחברה.
      </p>
    </article>
    <article>
         <!-- Информация о последних изменениях на сайте.
        Последние 	добавленные, или удаленные из базы гмахи и изменения в предоставляемой помощи.  -->
    </article>
  </main>
</template>

<script>
export default {
    name: 'MainG',
};
</script>

<style scoped>
main{
    display: flex;
    flex-direction: row-reverse;
    height: 650px;
    justify-content: space-between;
}
#about{
    margin-top: 25px;
    margin-right: 10px;
    height: 284px;
    width: 280px;
    background-color: #560d6153;
    border-radius: 10px;
}
#about p{
    padding: 15px;
}
</style>