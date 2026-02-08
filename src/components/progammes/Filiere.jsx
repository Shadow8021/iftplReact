
export default function Filiere(props) {
    return (
        <a className="block" href="#">
            <div className="w-80 h-70 bg-white p-10 min-w-60 rounded-lg shadow-2xl border-lg transition ease-in hover:bg-[#cfcdcd]">
                <img className="icone-prog mx-auto" src={props.logo} alt="close" />
                <p className="text-[#D00D2D] wrap max-w-100 mt-5 font-bold text-center">{props.titre}</p>
            </div>
        </a>
    )
}
