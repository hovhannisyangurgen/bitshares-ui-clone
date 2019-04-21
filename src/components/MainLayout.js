import React from 'react';

export default () => (
  <div id="mainContainer" className="grid-block">
    <div className="grid-block vertical">
      <div className="grid-block align-center" id="accountForm">
        <div className="grid-block shrink vertical">
          <div className="grid-content shrink text-center account-creation">
            <div>
              <img src="data:image/png;base64,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" />
            </div>
            <div>
              <h4>Create Account</h4>
            </div>
            <div>
              <h4>Welcome to BitShares</h4>
              <p>Your Decentralized Platform</p>
            </div>
            <div className="grid-block account-login-options">
              <a
                id="account_login_button"
                className="button primary"
                data-intro="Access the cloud wallet using an account name and password."
                href="#/create-account/password"
              >
                <span>Create Account</span>
              </a>
              <span className="button hollow primary">
                <span>Login</span>
              </span>
            </div>
            <div className="additional-account-options">
              <h5 style={{ textAlign: 'center' }}>
                <span>
                  <span>Optionally, </span>
                  <span>
                    <a
                      data-intro="Restore a wallet using your backup file."
                      href="#/wallet/backup/restore"
                    >
                      <span>restore your account</span>
                    </a>
                  </span>
                  <span> or create an account using the </span>
                  <span>
                    <a
                      data-intro="Create a local wallet and download any private keys belonging to it."
                      href="#/create-account/wallet"
                    >
                      <span>advanced form</span>
                    </a>
                  </span>
                  <span>.</span>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
