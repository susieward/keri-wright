import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    art: [
      {
        id: 1,
        src: require('@/components/images/art/vapor.png')
      },
      {
        id: 2,
        src: require('@/components/images/art/cyber.png')
      },
      {
        id: 3,
        src: require('@/components/images/art/cyber-grl.jpg')
      },
      {
        id: 4,
        src: require('@/components/images/art/motel.jpg')
      },
      {
        id: 5,
        src: require('@/components/images/art/bathroom.png')
      }
    ],

    projects: [
      {
        id: 1,
        name: 'Find A Church',
        desc: 'A web application that helps people search for United Methodist churches across the globe',
        src: require('@/components/images/projects/FAC.png'),
        page: '/find-a-church'
      },
      {
        id: 2,
        name: 'Kevin Williams Attorney',
        desc: 'A website redesign for local attorney specializing in bankruptcy and elder law',
        src: require('@/components/images/projects/kevin-home.png'),
        page: '/kevin-williams'
      },
      {
        id: 3,
        name: 'Red Token Project',
        desc: 'A personal project of mine that is a charity concept to bring sanitary products to women, trans men and non-binary people',
        src: require('@/components/images/projects/red-token-home.png'),
        page: '/redtoken'
      },
      {
        id: 4,
        name: 'Sitecore Training',
        desc: 'An internal training and reference site for the employees at United Methodist Communications',
        src: require('@/components/images/projects/sitecore.png'),
        page: '/sitecore'
      },
      {
        id: 5,
        name: 'What We Do',
        desc: 'A landing page made for United Methodist Communications describing  the company and our role in the broader United Methodist Church',
        src: require('@/components/images/projects/what-we-do.png'),
        page: '/what-we-do'
      }
    ]
  }


})

export default store;
