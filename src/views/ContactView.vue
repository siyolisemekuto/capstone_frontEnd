<template>
    <div>
       <h1>Send us a message.</h1>
      
       <form @submit.prevent="send" action="https://formspree.io/f/xaykqznp" method="post">
           <input v-model="message" type="text" name="message" id="message" class="form-control" placeholder="Message"
            required  >
           <input v-model="email" type="email" name="email" id="email" class="form-control" placeholder="Email"
            required  >
     
         <button type="submit" class="btn"><i class="fa-regular fa-paper-plane"></i></button>
       </form>
     </div>   
   </template>
   
   <script>
   export default {
     data(){
       return {
         name:"",
         email: "",
         password: "",
         user_type:""
       }
     },
     methods: {
       register() {
         return this.$store.dispatch("register", {
           name:this.name,
           email: this.email,
           password: this.password,
           user_type:this.user_type
         })
       },
   
   }
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   .page{
     display:block;
     padding:0 40px;
     background-color:rgb(250, 249, 246);
   }
   .container{
     background-color:white;
     width: 40vw;
     height: 68vh;
     margin-top: 110px;
     margin-bottom: 20px;
     border:1px solid grayscale;
     box-shadow:0 5px 5px 0 rgba(0, 0, 0, 0.2);
     display:flex;
     flex-direction:column;
     align-items: center;
     justify-content: space-evenly;
   }
   h1{
     font-size:25px;
   }
   input{
       height: 48px;
       padding: 19px 16px 7px;
       width:80%;
       color:black;  
       margin-bottom:10px;
       /* margin: 20px;
       border: none; */
       border: 1px solid gray;
       /* background:inherit; */
   }
   button{
     background-color:#141414;
     color:white;
     border-radius: 0;
     height: 48px;
     padding: 19px 16px 7px;
     width:20rem;
     margin-top: 20px;
     padding: 5px;
     font-size: large;
   }
   button:hover{
     background-color:rgba(20,20,20,0.8);
     
   }
   .register{
     text-decoration:underline;
     color:#C7A17F;
   }
   :-ms-input-placeholder::after{
       display: none;
   }
   form{
     width: fit-content;
     display:flex;
     flex-direction:column;
     align-items: center;
     justify-content: space-evenly;
   }
   </style>