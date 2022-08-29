import { createStore } from 'vuex';
import router from '../router';

const hostedURL = "https://capstone-mood-tracker.herokuapp.com/"
export default createStore({
  state: {
    user:null,
    mood: null
  },
  getters: {
  },
  mutations: {
    setUser (state, value) {
      state.user = value;
    }
  },
  actions: {
    fetchUser: async(context) => {
      const res = await axios.get(hostedURL + 'users');
      const { results } = await res.data;
      if (results) {
        context.commit('setUser', results);
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
      .then(data => {
        console.log(data)
        context.commit('setUser', data);
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
