import Form from "./components/Form";

function App() {
  return (
    <div className="app">
      <div className="w-full lg:w-1/2 text-white space-y-4 text-center lg:text-start">
        <h1 className="text-2xl lg:text-5xl">
          Learn to code by watching others
        </h1>
        <div className="">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-3">
        <div className="bg-tw-blue p-4 rounded-md w-full text-white text-center border-b-4 border-b-tw-dark-blue/30 ">
          Try it free 7 days{" "}
          <span className="text-tw-grayish-blue">then $20/mo. thereafter</span>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
