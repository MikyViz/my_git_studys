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
    <article id="news">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          vitae nam alias soluta veritatis dolore doloribus laudantium libero
          fuga atque modi earum cumque laborum, quibusdam esse doloremque
          dolorem hic perferendis recusandae iure provident nesciunt. Autem quis
          veniam libero! Neque, provident laboriosam? Quasi, corrupti expedita
          fugiat animi voluptatem voluptatibus ut vero iure praesentium
          provident, architecto sit hic.
        </p>
      </div>
      <div>
        <p>
          Enim voluptatem quasi iste nam adipisci est ad pariatur in totam
          delectus beatae placeat id nesciunt natus deserunt molestiae dolor
          autem ratione sequi incidunt, assumenda officia? At necessitatibus
          blanditiis odit pariatur dolore, dicta aliquam dignissimos corrupti
          quidem beatae neque adipisci facilis cupiditate explicabo commodi
          incidunt. Recusandae ea animi similique minus veniam repellat cumque,
          pariatur neque sit fugiat voluptatibus maxime aspernatur ad beatae nam
          cupiditate. Esse deserunt, hic assumenda a quos iusto, consequatur
          accusantium ipsam soluta natus cum incidunt laboriosam laudantium
          pariatur consectetur odio vitae earum quas officiis, modi debitis
          nihil magnam ratione!
        </p>
      </div>
      <div>
        <p>
          Fugiat aliquid et aspernatur non vero laudantium ipsam commodi
          reiciendis expedita harum blanditiis maiores quos, repellendus
          voluptatum pariatur temporibus voluptatibus nam, tempora officiis!
          Error a minus enim minima quia excepturi vitae nostrum natus veritatis
          quod esse pariatur suscipit cumque illum, quisquam repellat. Ipsam,
          non! Et molestiae quis debitis magni nisi, soluta, quibusdam animi
          dolores perferendis tenetur rerum, ipsa repellat enim. Optio, sed.
          Aspernatur hic, maiores voluptatum repellendus ipsa voluptates nostrum
          similique modi recusandae, cupiditate doloribus ducimus eligendi autem
          in laudantium sunt, veritatis inventore corporis adipisci dicta saepe
          totam impedit reiciendis? Voluptatum, fugiat nemo molestias debitis
          nobis porro. Numquam, sint tempore!
        </p>
      </div>
      <div>
        <p>
           Quasi quam enim expedita! Expedita
          atque corrupti doloribus magnam id, ad iste rerum odio, at officia
          quos exercitationem error temporibus sapiente dolorum illo accusantium
          nostrum nesciunt nobis. Nulla quod quo esse! Aliquam, labore?
          Distinctio id et officia, nostrum soluta at ipsam, eum possimus
          dolores velit eveniet est aliquid aspernatur quis architecto ipsa
          fugiat nisi quasi quo facilis! Maiores sed minus consequuntur tempora
          nisi itaque illum est, ut sunt aut. Vero esse magni minus beatae
          tenetur nihil, error ab voluptatem obcaecati expedita dolore. Animi
          fugiat dolorem iure commodi?
        </p>
      </div>

      <!-- Информация о последних изменениях на сайте.
                                 Последние 	добавленные, или удаленные из базы гмахи и изменения в предоставляемой помощи.  -->
    </article>
  </main>
</template>

<script>
export default {
  name: "MainG",
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row-reverse;
  height: max-content;
  justify-content: space-between;
}
#about {
  position: relative;
  top: 25px;
  right: 25px;
  height: 284px;
  width: 280px;
  background-color: #560d6153;
  border-radius: 10px;
}
article p {
  padding: 15px;
}
#news {
  background-color: #560d6153;
  width: 500px;
  height: 600px;
  overflow: auto;
  border-radius: 10px;
  position: relative;
  left: 20px;
  top: 25px;
}
</style>