export function Hour() {

    const LOCALE = "es-pe";
    const TODAY_OPTION = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    };
    const today = new Date().toLocaleString(
        LOCALE,
        TODAY_OPTION
    );

    return (
        <h4>
            <span>Tipo de cambio a las: </span>
            <span>{ today.replace(",", "") }</span>
        </h4>
    )
}