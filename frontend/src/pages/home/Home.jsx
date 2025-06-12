import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex flex-1 w-full max-w-5xl custom-scrollbar mx-auto h-full rounded-2xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-lg border border-white/20">
      <Sidebar />
      {/* Make MessageContainer scrollable */}
      <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;