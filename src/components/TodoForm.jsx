
export default function TodoForm({ input, handleSubmit, handleChange }){

    return (
        <form className="text-4xl text-center font-bold text-purple-600"
              onSubmit={handleSubmit}
        >
            <div className={'flex justify-center gap-4'}>
              <span>
                  <input className="border border-black-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                         value={input}
                         onChange={handleChange}
                  />
                  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-all"
                          type={'submit'}>Submit</button>
              </span>
            </div>
        </form>
    );
}