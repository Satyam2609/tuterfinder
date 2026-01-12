import {Search} from 'lucide-react'
export default function SearchTutor(){
    return(
       <section className="h-full bg-white my-20 px-10 py-10 relative rounded-t-xl inset-0 w-full flex items-center justify-center">
  <div className="h-full w-full rounded-2xl bg-gray-100">
    <h1  className="text-4xl font-bold w-full flex my-10 justify-center">Find Your Best Tutor In Your City</h1>
    <div className="h-full w-full flex justify-around p-10 ">
        <h1 className="text-4xl font-bold">Best Tution Find</h1>
       <div className="relative w-full max-w-lg mx-auto">
  <Search
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
  />

  <input
    type="text"
    placeholder="Find coaching"
    className="
      w-full
      h-11
      pl-11
      pr-4
      border
      rounded-2xl
      outline-none
      focus:border-amber-400
      focus:ring-1
      focus:ring-amber-200
    "
  />
  <h1>Just Type And find your best tutor</h1>
</div>

        
    </div>

  </div>
</section>

    )
}