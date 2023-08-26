function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-5/6 py-52">
      <div className="flex flex-col items-center p-4 rounded-lg border-2 border-black">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-4">The requested page does not exist.</p>
        <a className="underline" href="/">Go Home</a>
      </div>
    </div>
  );
}

export default ErrorPage;
