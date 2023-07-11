// assets
import logo from "../assets/logo.svg";

const Loading = () => {
  return (
    <div className="mx-auto  flex h-screen flex-col items-center justify-center gap-4 bg-yellow-50">
      <img className="animate-spin" src={logo} width={84} alt="" />
      <h2 className="text-3xl">Loading...</h2>
    </div>
  );
};
export default Loading;
