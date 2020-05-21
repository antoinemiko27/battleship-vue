import Vue from 'vue'
import Jeu from './jeu.vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Jeu),
}).$mount('#jeu')


new Vue({
  el: '#jeu',
  data: {
    personnes: [
      {A: "A1", B: "B1", C:"C1", D:"D1", E:"E1", F:"F1", G:"G1", H:"H1"},
      {A: "A2", B: "B2", C:"C2", D:"D2", E:"E2", F:"F2", G:"G2", H:"H2"},
      {A: "A3", B: "B3", C:"C3", D:"D3", E:"E3", F:"F3", G:"G3", H:"H3"},
      {A: "A4", B: "B4", C:"C4", D:"D4", E:"E4", F:"F4", G:"G4", H:"H4"},
      {A: "A5", B: "B5", C:"C5", D:"D5", E:"E5", F:"F5", G:"G5", H:"H5"},
      {A: "A6", B: "B6", C:"C6", D:"D6", E:"E6", F:"F6", G:"G6", H:"H6"},
      {A: "A7", B: "B7", C:"C7", D:"D7", E:"E7", F:"F7", G:"G7", H:"H7"},
    ]
  }
})
