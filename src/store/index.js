import { createStore } from 'vuex';
import router from '../router';

const hostedURL = "https://capstone-mood-tracker.herokuapp.com/"
export default createStore({
  state: {
    user:null,
    moods: null,
    token:null
  },
  getters: {
  },
  mutations: {
    setUser (state, value) {
      state.user = value;
    },
    setToken (state, value) {
      state.token = value;
    }
  },
  actions: {
    fetchUser: async(context,id) => {
      const res = await(hostedURL + 'users/'+id);
      const { results } = await res.data;
      if (results) {
        context.commit('setUser', results);
        console.log(result);
      }
    },
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
      const {name,email,password}=payload
      console.log(name, email, password);
      fetch('https://capstone-mood-tracker.herokuapp.com/users/register',{
        method:"POST",
        body:JSON.stringify({
          name: name,
          email: email,
          password: password
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
      // let results = res.data;
      // console.log(results);
    }
  },
  modules: {
  }
})
