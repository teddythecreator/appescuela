import { useState, useEffect } from "react";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const StudentDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const userName = "Student"; // Change this with the connected user's name

  useEffect(() => {
    // Listen to real-time messages
    const q = query(collection(db, "chats"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });

    return () => unsubscribe(); // Clean up subscription
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (newMessage.trim() === "") return;

    try {
      await addDoc(collection(db, "chats"), {
        user: userName,
        message: newMessage,
        timestamp: new Date(),
      });
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      {/* Grid sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Current Courses</h2>
          <p className="text-gray-600">View your enrolled courses and progress</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Upcoming Assignments</h2>
          <p className="text-gray-600">Track your pending assignments</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Grades</h2>
          <p className="text-gray-600">Check your latest academic performance</p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Chat</h2>
        <div className="h-64 overflow-y-auto mb-4 border border-gray-300 rounded-lg p-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 rounded-lg mb-2 ${
                msg.user === userName
                  ? "bg-indigo-100 self-end text-right"
                  : "bg-gray-200 self-start text-left"
              }`}
            >
              <p className="text-sm font-semibold">{msg.user}</p>
              <p className="text-md">{msg.message}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentDashboard;