import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div className="container mx-auto p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center bg-black shadow-lg rounded-lg p-6">
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-4">
            {user.displayName || "User Name"}
          </h2>
          <p className="text-withe-500">{user.email || "No email provided"}</p>
          <div className="flex space-x-4 mt-4">
            <button className="btn btn-primary">Follow</button>
            <button className="btn btn-outline">Message</button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="stat bg-black shadow-lg rounded-lg p-4">
            <div className="stat-title">User ID</div>
            <div className="stat-value">{user.uid || "N/A"}</div>
          </div>
          <div className="stat bg-black shadow-lg rounded-lg p-4">
            <div className="stat-title">Email Verified</div>
            <div className="stat-value">
              {user.emailVerified ? "Yes" : "No"}
            </div>
          </div>
          <div className="stat bg-black shadow-lg rounded-lg p-4">
            <div className="stat-title">Anonymous</div>
            <div className="stat-value">{user.isAnonymous ? "Yes" : "No"}</div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-black shadow-lg rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold">About</h3>
          <p className="text-withe-600 mt-2">
            This account was created on{" "}
            {new Date(user.metadata.creationTime).toLocaleDateString()} and was
            last logged in on{" "}
            {new Date(user.metadata.lastSignInTime).toLocaleDateString()}.
          </p>
        </div>

        {/* Activity Feed */}
        <div className="bg-black shadow-lg rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold">Activity</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start space-x-4">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Activity Icon"
                  />
                </div>
              </div>
              <div>
                <p className="text-withe-800">Logged in recently</p>
                <p className="text-sm text-withe-500">
                  {new Date(user.metadata.lastSignInTime).toLocaleString()}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Activity Icon"
                  />
                </div>
              </div>
              <div>
                <p className="text-withe-800">Account created</p>
                <p className="text-sm text-withe-500">
                  {new Date(user.metadata.creationTime).toLocaleString()}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
