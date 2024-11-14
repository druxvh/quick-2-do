import Footer from "./components/footer";
import Header from "./components/header";
import TodoWrapper from "./components/todoWrapper";

export default function Home() {
  return (
    <div className="relative w-full sm:w-[550px] pt-10 h-screen mx-auto">
      <Header />
      <TodoWrapper />
      <Footer />
    </div>
  );
}
