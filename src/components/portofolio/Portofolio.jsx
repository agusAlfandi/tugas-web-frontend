import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gue from "../../assets/gue.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Portofolio = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto w-auto gap-6">
      {/* Title */}
      <div className="mt-5 flex justify-center">
        <p className="text-2xl">Profile</p>
      </div>
      {/* Title */}

      <div className="flex flex-row justify-between h-3/4 w-7/12">
        {/* Foto Profile */}
        <div
          className="border border-slate-600 rounded-t-xl rounded-b-xl h-auto 
        hover:bg-base-300 duration-300"
        >
          <div className="relative rounded-t-xl h-3/4 w-96 overflow-hidden">
            <img
              src={Gue}
              alt="Foto"
              className="absolute top-0 left-0 h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col rounded-b-xl text-center w-96 h-auto p-2 gap-4 pt-3">
            <p className="leading-6 tracking-wider">Hallo, Saya Agus Alfandi</p>{" "}
            <p className="leading-6 tracking-wider">
              Saya Junior Full Stack Web Development, yang fokus pada pembuatan
              web dari Frontend sampai Backend
            </p>
          </div>
        </div>
        {/* Foto Profile */}

        {/* About Me and experience */}
        <div className="w-1/2 h-full flex flex-col gap-6">
          <div
            className="border border-slate-600 rounded-xl flex-1 p-4 flex flex-col items-center gap-5
           hover:bg-base-300 duration-300"
          >
            <div>
              <h1 className="text-2xl">About me</h1>
            </div>
            <div className="h-full w-full flex flex-col justify-start gap-4">
              <p>
                Name :
                <br />
                Agus Alfandi
              </p>
              <p>
                Age : <br /> 28 years
              </p>
              <p>
                Locations : <br /> Keputren, Kartasura, Sukoharjo, Central Java
              </p>
            </div>
          </div>

          {/* Expirience */}
          <div
            className="border border-slate-600 rounded-xl flex-1 p-4 flex flex-col items-center gap-5 
          hover:bg-base-300 duration-300"
          >
            <div>
              <p className="text-2xl">Expirience</p>
            </div>
            <div>
              <p className="leading-8 tracking-wider text-justify ">
                Saya belajar Full Stack Web Dev secara autodidak kurang lebih
                satu tahun, dan sudah belajar dalam membuat project kecil untuk
                pemula seperti Weather App, Diary App, Todo List menggunakan
                framework Frontend Vite, dan NextJS. Kalau Backend menggunakan
                NodeJS/ExpressJS dan di Database menggunakan MySql, Supabase.
              </p>
            </div>
          </div>
          {/* Expirience */}
        </div>

        {/* About Me and experience */}
      </div>

      {/* Footer */}
      <div
        className="border border-slate-600 rounded-xl flex flex-col w-96 h-auto mb-5 gap-5 p-4 
      hover:bg-base-300 duration-300"
      >
        <div className="flex justify-center">
          <p className="text-2xl">Contact :</p>
        </div>
        <div className="flex flex-row flex-1">
          <div className="flex-1 flex justify-center items-center">
            <button className="btn btn-neutral">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <button className="btn btn-neutral">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default Portofolio;
