import "@/styles/globals.css";
import store from "@/src/redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "@/src/redux/Slices/AsyncUserSlice";

export default function App({ Component, pageProps }) {
  
  useEffect(()=>{
    store.dispatch(fetchUsers())
  },[])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
