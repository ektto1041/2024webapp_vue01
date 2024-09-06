import { createStore } from 'vuex';

const store = createStore({
  state: {
    userDatas: [
      {
        userId: 'user1',
        password: '123',
        username: '김철수',
        addr: 'Seoul',
        lat: 37.4824995,
        lng: 126.8820226,
        image: 'https://picsum.photos/200',
      },
      {
        userId: 'user2',
        password: '123',
        username: '박민수',
        addr: 'Busan',
        lat: 37.4834995,
        lng: 126.8810226,
        image: 'https://picsum.photos/200',
      },
      {
        userId: 'user3',
        password: '123',
        username: '정영희',
        addr: 'Suwon',
        lat: 37.4814995,
        lng: 126.8800226,
        image: 'https://picsum.photos/200',
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      const idx = state.userDatas.findIndex(userData => userData.userId === payload.userId);
      if (idx !== -1) {
        state.userDatas[idx] = { ...payload };
      } else {
        state.userDatas.push(payload);
      }
    },
    deleteUser(state, payload) {
      state.userDatas.splice(payload, 1);
    },
  },
  actions: {},
});

export default store;
