<template>
    <v-footer 
      color="rgb(0, 0, 0)"
      dark
      tile
      class="footer-main"
    >
        <v-container
        class="footer-container"
        >
            <v-row>
                <v-col
                  cols="12"
                  lg="4"
                  sm="6"
                  md="6"
                  class="footer-navigation"
                >
                    <p><div class="footer-header">НАВИГАЦИЯ</div></p>
                    <p>Главная</p>
                    <p>О нас</p>
                    <p>Наши услуги</p>
                </v-col>
                <v-col
                  cols="12"
                  lg="4"
                  md="6"
                  sm="6"
                >
                    <p><div class="footer-header">КОНТАКТЫ</div></p>
                    <p>+7 707 020 25 49; +7 778 683 83 28<br>+7 700 222 56 70; +7 705 391 81 21</p>
                    <p>info@ncd.kz</p>
                    <p>г. Алматы, Мухамеджанова 9</p>
                </v-col>
                <v-col
                  cols="12"
                  lg="4"
                  md="12"
                  sm="12"
                >
                    <div class="mx-auto newsletter-main">
                        <p><div class="footer-header">ПОДПИШИТЕСЬ НА РАССЫЛКУ</div></p>
                        <div class="newsletter-container d-flex">
                            <v-text-field
                                label="Ваш Email"
                                required
                                rounded
                                filled
                                dense
                                light
                                full-width
                                background-color="#fff"
                                width="200px"
                                color="#000"
                                class="mt-2"
                                
                            ></v-text-field>
                            <div class="ml-5">
                                <v-btn 
                                class="mx-2"
                                fab
                                dark
                                large
                                color="cyan"
                                >
                                    <v-icon dark>mdi-pencil</v-icon dark>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    
                    <div class="social-media-icons mx-auto d-flex">
                        <v-icon>mdi-instagram</v-icon>
                        <v-icon class="ml-5">mdi-facebook</v-icon>
                        <v-icon class="ml-5">mdi-twitter</v-icon>
                    </div>
                </v-col>
            </v-row>
            <v-container 
              class="copyright d-flex justify-space-between mt-10 grey--text text--darken-2"
              
            >
                <p>&copy;&nbsp;NCD&nbsp;|&nbsp;International</p>
                <p>Все права защищены</p>
            </v-container>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>
