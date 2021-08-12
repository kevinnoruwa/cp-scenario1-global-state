import React from "react";
import EmailModal from "./EmailModal/EmailModal";
import { EMProvider } from "./EmailModal/EmProvider";

const App = () => {
  return (
    <EMProvider>
      <>
        <div>
          <header className="page-header">
            <div className="logo">
              Berry
              <div className="logo__sub">by Jenny</div>
            </div>
          </header>
          <main className="content-area">
            <h1>Content Area</h1>
          </main>
          <EmailModal />
          <div className="email-modal" />
        </div>
      </>
    </EMProvider>
  );
};

export default App;
