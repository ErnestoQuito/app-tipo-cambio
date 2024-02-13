import { ButtonSave } from "./ButtonSave";
import "../styles/Exchange.css"

export function Exchange() {
    
    return (
        <section className="form-cont-exchange">
            <h4 className="exchange-title">Registrar tipo de cambio</h4>
            <form className="exchange-body">
                <label className="exchange-item">
                    <span>Compra: S/. </span><input type="numeric" min="0" max="5" placeholder="Ejemplo 3.789" />
                </label>
                <label className="exchange-item">
                    <span>Venta: S/. </span><input type="numeric" placeholder="Ejemplo 3.889" />
                </label>
                <ButtonSave />
            </form>
            <footer className="exchange-footer"><small>Tipo de cambio: <strong>PEN</strong></small></footer>
        </section>
    )
}