import Navbar from "./_components/Navbar";

export default function GithubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
