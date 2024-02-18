import Navbar from "@/components/Navbar/Navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}