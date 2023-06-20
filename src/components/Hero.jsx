import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex
    justify-center items-center flex-col">
      <nav className="flex justify-between
       items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo"
        className="w-28 object-contain" />
        <button
        type="button"
        onClick={() => window.open('')}
        className="black_btn">
        Login
        </button>
      </nav>
      <h1 className="head_text">
         Get ahead with your school work<br
         className="max-md:hidden" />
        <span className="orange_gradient">Summarize Articles with OpenAI</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with SUMMIT UP, with this tool you will be able 
        to transform lengthy articles into clear concise summaries.
      </h2>
    </header>
  )
}

export default Hero