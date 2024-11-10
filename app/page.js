import Header from "./components/Header";
import TodoWrapper from "./components/TodoWrapper";

export default function Home() {
  return (
    <div className="w-full px-2 sm:w-[550px] pt-10 h-screen mx-auto">
      <Header/>
      <TodoWrapper/>
    </div>
  );
}
