import React from "react";
import ReactDOM from "react-dom";

console.log("HOC");

const Info = props => (
  <div>
    <h1>Hi</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedContent => {
  return props => (
    <div>
      {props.isAdmin && (
        <p>This is priviledged info. Please do not share it.</p>
      )}
      <WrappedContent {...props} />
    </div>
  );
};

const withAuthentication = WrappedContent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <div>
          {props.isAdmin && (
            <p>This is priviledged info. Please do not share it.</p>
          )}
          <WrappedContent {...props} />
        </div>
      ) : (
        <p>Login to see this info.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthentication(Info);

ReactDOM.render(
  <AuthInfo
    isAdmin={true}
    isAuthenticated={true}
    info="Santosh has always been single."
  />,
  document.getElementById("app")
);
