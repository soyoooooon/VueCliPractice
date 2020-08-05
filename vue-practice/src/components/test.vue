 <template>
 <div class="container" :class="{ 'myBtn': myBtn }">

  <button @click="clickBtn()">ㅇㅣ것은 버튼입니다</button>
</div>
</template>

<script>
export default {
 name:"test",
 data(){
   return{
   myBtn : false
   }

 },

 methods:{
   clickBtn(){
    this.myBtn = !this.myBtn
   }


 }
 
}
</script>

<style>
.container {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 100%;
  justify-content: center;
  align-items: center;
  background-color: orange;
}

.myBtn{
background-color: palegoldenrod;
}


</style>

