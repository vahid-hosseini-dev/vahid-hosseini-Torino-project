import AuthProvider from "@/context/AuthProvider";

function ProfileLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProfileLayout;
