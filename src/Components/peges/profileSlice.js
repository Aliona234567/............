import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  try {
    return {
      profiles: JSON.parse(localStorage.getItem("profiles")) || [],
      isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
      loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
      loginError: null
    };
  } catch (error) {
    console.error("Ошибка при чтении из localStorage:", error);
    return {
      profiles: [],
      isAuth: false,
      loggedInUser: null,
      loginError: null
    };
  }
};

const profileSlice = createSlice({
  name: "profile",
  initialState: getInitialState(),
  reducers: {
    login: (state, action) => {
      try {
        const user = state.profiles.find(
          item => item.email === action.payload.email && 
                 item.password === action.payload.password
        );
        
        if (user) {
          state.isAuth = true;
          state.loggedInUser = user;
          state.loginError = null;
          localStorage.setItem("isAuth", JSON.stringify(true));
          localStorage.setItem("loggedInUser", JSON.stringify(user));
        } else {
          state.loginError = "Неверный email или пароль";
        }
      } catch (error) {
        console.error("Ошибка при входе:", error);
        state.loginError = "Произошла ошибка при входе";
      }
    },

    clearLoginError: (state) => {
      state.loginError = null;
    },

    logout: (state) => {
      state.isAuth = false;
      state.loggedInUser = null;
      localStorage.setItem("isAuth", JSON.stringify(false));
      localStorage.removeItem("loggedInUser");
    },

    register: (state, action) => {
      try {
        const existingUser = state.profiles.some(
          user => user.email === action.payload.email
        );
        
        if (!existingUser) {
          const newUser = { 
            ...action.payload, 
            paidItems: [],
            id: Date.now().toString() 
          };
          
          state.profiles.push(newUser);
          state.isAuth = true;
          state.loggedInUser = newUser;
          
          localStorage.setItem("profiles", JSON.stringify(state.profiles));
          localStorage.setItem("isAuth", JSON.stringify(true));
          localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        }
      } catch (error) {
        console.error("Ошибка при регистрации:", error);
        state.loginError = "Произошла ошибка при регистрации";
      }
    },

    addPaidItems: (state, action) => {
      try {
        if (state.loggedInUser) {
          const userIndex = state.profiles.findIndex(
            user => user.email === state.loggedInUser.email
          );
          
          if (userIndex !== -1) {
            const updatedUser = {
              ...state.profiles[userIndex],
              paidItems: [
                ...(state.profiles[userIndex].paidItems || []),
                ...action.payload
              ]
            };
            
            state.profiles[userIndex] = updatedUser;
            state.loggedInUser = updatedUser;
            
            localStorage.setItem("profiles", JSON.stringify(state.profiles));
            localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
          }
        }
      } catch (error) {
        console.error("Ошибка при добавлении оплаченных товаров:", error);
      }
    },
  },
});

export const { 
  login, 
  logout, 
  register, 
  addPaidItems, 
  clearLoginError 
} = profileSlice.actions;

export default profileSlice.reducer;