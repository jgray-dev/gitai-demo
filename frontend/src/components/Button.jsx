export default function Button() {

  function handleClick() {
    fetch('http://67.164.191.36:5000/api/hello')
      .then(r => r.json())
      .then(response => console.log(response))
  }

  return (
    <>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => handleClick()}
      >
        Button text
      </button>
    </>
  )
}
