function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="mb-8">
        <div className="w-24 h-24 border-8 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-3xl font-bold text-center text-gray-800 mb-2">
        Sit back and relax,
      </p>
      <p className="text-2xl font-semibold text-center text-gray-700">
        the books are being loaded.
        <br />
        <span className="text-lg font-normal text-gray-500">
          It may take some time...
        </span>
      </p>
    </div>
  );
}

export default Spinner;