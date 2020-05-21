<template>
<div id="jeu">
  <table class="table table-responsive blue">
  <caption>My Game</caption>
  <thead>
    <tr>
    <td></td>
     <th v-for="(col, x) in personnes" scope="col">{{ x +1 }}</th>
    </tr>
  </thead>
  <tbody id="jeu">
    <tr v-for="(row, y) in personnes">
      <th scope="row"> {{lettres[y]}} </th>
        <td class="table-success" v-for="(col, x) in row">
          <button @click="shipplacement(y,x)" :class="id(x,y)"> {{personnes[y][x]}} </button>
        </td>
    </tr>

    <br>
    <br>
    <br>
    <br>
    <div v-if="liste() === true">
      ship to place in this sequence: <br><br>

      Carrier --> size 5 <br>
      Battleship --> size 4 <br>
      Cruiser --> size 3 <br>
      Submarine --> size 3 <br>
      Destroyer --> size 2 <br>
    </div>
  </tbody>
  <div id="app">
        <span v-html="chaine2"></span>
        <span v-html="etat"></span>
  </div>


    <thead>
      <tr>
      <td></td>
       <th v-for="(col, x) in personnes" scope="col">{{ x +1 }}</th>
      </tr>
    </thead>


  <tbody id="jeu">
    <tr v-for="(row, y) in personnes">
      <th scope="row"> {{lettres[y]}} </th>
        <td class="table-success" v-for="(col, x) in row">
          <button> {{personnes[y][x]}} </button>
        </td>
    </tr>
    <br><br><br><br><br><br><br><br><br><br><br>
  </tbody>




  </table>
</div>


</template>



<script>

export default {

    data() {
      return{
        res : 0,
        idcase :"",
        resume5: "",
        resume4: "",
        resume3: "",
        resume2: "",
        resume1: "",
        chaine2: "",
        start : true,
        compteur: 0,
        etat: "",
        lettres: ['A','B','C','D','E','F','G','H','I','J'],
      personnes: [
        ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10'],
        ['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10'],
        ['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10'],
        ['D1','D2','D3','D4','D5','D6','D7','D8','D9','D10'],
        ['E1','E2','E3','E4','E5','E6','E7','E8','E9','E10'],
        ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10'],
        ['G1','G2','G3','G4','G5','G6','G7','G8','G9','G10'],
        ['H1','H2','H3','H4','H5','H6','H7','H8','H9','H10'],
        ['I1','I2','I3','I4','I5','I6','I7','I8','I9','I10'],
        ['J1','J2','J3','J4','J5','J6','J7','J8','J9','J10'],

      ],

      ship : ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'],
      shipsize: [5,4,3,3,2],
      pos : [[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1]],

      }
    },

      computed: {
        idUrl: function () {
          return window.location.pathname.split('/Jeu')[1] || 0
        },
      },



      mounted: function(){
        this.shipManage()
      },









      methods:{




        shipManage: function(){
          var chaine = ""
          for(var cpt = 0; cpt < this.shipsize.length; cpt++){
            content += "<div> types: " + this.ship[cpt] + '| size: ' + this.shipsize[cpt] + "</div>"
          }

          this.chaine2 = chaine2

          if(this.compteur < this.pos.length){
            this.etat= "<div> Take a starting point for" + (this.compteur % 2 == 0 ? this.ship[this.compteur/2] : this.ship[this.compteur/2-0.5]) + "<div>"
            return this.etat
          }

          else{
           this.etat="<div> there is an error about ship placement </div>"
           return this.etat
          }
        },


        shipplacement: function(x,y){
          if(this.compteur < this.pos.length){
            if(this.compteur % 2 !=0){
              var power = this.shipsize[this.compteur/2 - 0.5]
              if(Math.abs(this.pos[this.compteur - 1][0] -x) != power-1  && Math.abs(this.pos[this.compteur - 1][1] -y) != power-1){
                this.etat= "<div>" + this.ship[(this.compteur - 1) / 2] + " is not at the right place ! </div>"
                this.counter--
                return
              }
            }
            if(this.wrong()){
              this.etat= "<div>" + this.ship[(this.compteur - 1) / 2] + " is not at the right place they are crossing each other </div>"
              return
            }
            this.res = x*y
            this.idcase = "this.res"




            this.pos[this.compteur][0] = x
            this.pos[this.compteur][1] = y
            this.compteur++
            this.shipManage()
          }
        },

        wrong: function(){
          return false;
        },

        liste : function(){

          return true
        },

        color: function(x,y){
          if(this.compteur == 0){

          }
          if(this.compteur == 1){

          }
          if(this.compteur == 2){

          }
          if(this.compteur == 3){

          }
          if(this.compteur == 4){

          }
        },


        id: function(x,y){
          this.res = x*y
          this.idcase = "this.res"
          return this.idcase

        },


}
};









</script>


<style>
#jeu{
  background-color: red;
  text-align: center;
  position: center;
  background-image: url('https://images.unsplash.com/photo-1508615121316-fe792af62a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
}

table{
 position: float;
}

.hover{
  color: red;
}

.click{
  color: red;
}


</style>
