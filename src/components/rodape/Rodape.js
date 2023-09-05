import "../rodape/Rodape.css";

function Rodape({ item1, item2, item3, item4, item5 }) {
    return (
        <div className="pai">
            <div className="rodape1">
                <div className="titulo">Titulo1</div>
                <div className="filho">{item1}</div>
                <div className="filho">{item2}</div>
                <div className="filho">{item3}</div>
            </div>
            <div className="rodape1">
                <div className="titulo">Titulo2</div>
                <div className="filho">{item4}</div>
                <div className="filho">{item5}</div>
            </div>
        </div>
    );
}
export default Rodape