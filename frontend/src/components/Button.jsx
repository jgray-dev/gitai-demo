export default function Button() {

    function handleClick() {
        console.log("Button clicked")
    }

    return (
        <>
            <button
                type="button"
                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                onClick={() => handleClick()}
            >
                Button text
            </button>
        </>
    )
}
