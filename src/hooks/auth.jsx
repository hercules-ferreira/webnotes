import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { api } from "../services/api";
import PropTypes from "prop-types";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      console.log(response);

      const { user, token } = response.data;
      console.log(user, token);

      localStorage.setItem("@webnotes:user", JSON.stringify(user));
      localStorage.setItem("@webnotes:token", token);

      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar");
      }
    }
  }

  async function updateProfile({ user }) {
    try {
      const { password, old_password, ...userData } = user; // evita aparecer a senha antiga, ou nova no local storage, após atualizado
      await api.put("/users", userData);

      localStorage.setItem("@webnotes:user", JSON.stringify(userData));

      setData({ user: userData, token: data.token });

      alert("Profile atualizado !!!");
    } catch (error) {
      if (error.response) {
        alert(error.response.date.message);
      } else {
        alert("não foi possível atualizar o perfil");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@webnotes:token");
    localStorage.removeItem("@webnotes:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@webnotes:token");
    const user = localStorage.getItem("@webnotes:user");

    if (token && user) {
      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  const contextValue = useMemo(() => {
    return { updateProfile, signIn, signOut, user: data.user };
  }, [data.user, updateProfile]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
