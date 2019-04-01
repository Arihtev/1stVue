<template>
    <div>
        <div id="app"> 


  <main>
    <!--<v-content>
      <v-container fluid>
      

    <v-flex >
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              xs6
              md4
              lg3
              v-for="n in 4"
              :key="n"
            >
              <v-card flat tile>
                <v-card-media
                  :src="`https://api.adorable.io/avatars/285/abott@adorable.png`"
                  height="200px"
                >
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
      </v-container>
    </v-content>-->
          <v-layout row wrap>
            <v-flex
              xs6
              md3
              lg3
              v-for="n in 4"
              :key="n"
            >
              <v-card flat tile>
                <v-card-media
                  :src="`https://api.adorable.io/avatars/285/abott@adorable.png`"
                  height="250px"
                >
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
    
  </main>  

  </div>
    </div>
</template>
