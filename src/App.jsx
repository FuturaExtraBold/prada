import BigGreyBox from "./components/BigGreyBox/BigGreyBox";
import ContentArea from "./components/ContentArea/ContentArea";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <main className="app">
      <Header />
      <ContentArea />
      <BigGreyBox />
    </main>
  );
}
