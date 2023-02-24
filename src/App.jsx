import { CometChat } from "@cometchat-pro/chat";
import { CometChatUI } from "./CometChatWorkspace/src";
const appID = import.meta.env.VITE_REACT_APP_COMETCHAT_APP_ID
const region =import.meta.env.VITE_REACT_APP_COMETCHAT_REGION
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

const authKey = import.meta.env.VITE_REACT_APP_COMETCHAT_AUTH_KEY
// var uid = "user2";
// var name = "Eliasy";

// var user = new CometChat.User(uid);
// user.setName(name);
// CometChat.createUser(user, authKey).then(
//     user => {
//         console.log("user created", user);
//     },error => {
//         console.log("error", error);
//     }
// )
function App() {

  return (
    <div className="App">
     <div style={{width: '800px', height:'800px' }}>
      	<CometChatUI />
      </div>
    </div>
  )
}

export default App
