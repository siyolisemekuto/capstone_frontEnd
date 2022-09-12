import { createStore } from 'vuex';
import router from '../router';
import createPersistedState from "vuex-persistedstate";


const hostedURL = "https://capstone-mood-tracker.herokuapp.com/"
export default createStore({
  state: {  
token:null,
user:null,
moods:null
  },
  getters: {
  },
  mutations: {
    setUser (state, value) {
      state.user = value;
    },
    setMood (state, value) {
      state.mood = value;
    },
    setToken (state, value) {
      state.token = value;
    }
  },
  actions: {
    login: async (context,payload) => {
      const {email,password}= await payload
      console.log(email, password);
      fetch('https://capstone-mood-tracker.herokuapp.com/users/login',{
        method:"POST",
        body:JSON.stringify({
          email: email,
          password:  password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(res=>res.json())
      .then(tokendata => {
        console.log(tokendata)
        context.commit('setToken', tokendata.token);
        fetch(hostedURL + "users/verify",{
          method:"get",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'x-auth-token':  `${tokendata.token}`
          },
        })
        .then(res => res.json())
        .then(userdata =>{
          console.log(userdata.user);
          context.commit('setUser', userdata.user); 
        }

        )
        router.push({name: 'about'});
      });
      // let results = res.data;
      // console.log(results);
    },
    register: async (context,payload) => {
      const {name,email,password, user_type}=payload
      console.log(name, email, password);
      fetch('https://capstone-mood-tracker.herokuapp.com/users/register',{
        method:"POST",
        body:JSON.stringify({
          name: name,
          email: email,
          password: password,
          user_type:user_type
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(res=>res.json())
      .then(data => {
        console.log(data)
        context.commit('setUser', data);
        router.push({name: 'about'});
      });
    
    },
    editUser: async (context,payload) =>{
      console.log(payload);
      context.commit('setUser')
      fetch(`https://capstone-mood-tracker.herokuapp.com/users/${payload.id}/edit`,{
        method:"PATCH",
        body:JSON.stringify({
          email:payload.email,
          name:payload.name,
          user_id:payload.id
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token':  `${payload.token}`
        }
      })
      .then(res=>res.json())
      .then(profiledata => {
        console.log(profiledata)
        context.commit('setUser',payload );
        router.push({name: 'record'});
      });
    },
    deleteUser: async (context,payload) =>{
      console.log(payload);
      context.commit('setUser')
      fetch(`https://capstone-mood-tracker.herokuapp.com/users/${payload.id}/edit`,{
        method:"DELETE",
        body:JSON.stringify({
          email:payload.email,
          name:payload.name,
          user_id:payload.id
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token':  `${payload.token}`
        }
      })
      .then(res=>res.json())
      .then(profiledata => {
        console.log(profiledata)
        context.commit('setUser',payload );
        router.push({name: 'register'});
      });
    },
    editMood: async (context,payload) =>{
      console.log(payload);
      context.commit('setMood')
      fetch(`https://capstone-mood-tracker.herokuapp.com/users/${payload.id}/${payload.id}/edit/${payload.id}`,{
        method:"PATCH",
        body:JSON.stringify({
          rating:payload.rating,
          notes:payload.notes,
          user_id:payload.id,
          mood_id:payload.id
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token':  `${payload.token}`
        }
      })
      .then(res=>res.json())
      .then(data => {
        console.log(data)
        context.commit('setMood',payload );
        router.push({name: 'record'});
      });
    },
    logMood: async (context,payload) => {
      // const {rating,notes}= await payload
      console.log(payload);
      context.commit('setUser')
      fetch(`https://capstone-mood-tracker.herokuapp.com/users/${payload.id}/log-mood`,{
        method:"POST",
        body:JSON.stringify({
          user_id:payload.id,
          rating: payload.rating,
          notes: payload.notes
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token':  `${payload.token}`
        },
      })
      .then(res=>res.json())
      .then(mooddata => {
        console.log(mooddata)
        context.commit('setMood', mooddata);
        router.push({name: 'record'});
      });
    },
    showRecord: async (context,payload) => {
      console.log(payload)
      fetch(`https://capstone-mood-tracker.herokuapp.com/users/${payload.id}/${payload.id}/view-all`,{
        method:"GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token':  `${payload.token}`
        },
      })
      .then(res=>res.json())
      .then(mooddata => {
        console.log(mooddata)
        context.commit('setMood', mooddata);
      })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})