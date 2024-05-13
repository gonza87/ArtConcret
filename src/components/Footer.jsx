function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-md-4 a">
            <p className="titleFooter">TIENDA</p>
            <p>Dirección: Av. Florencia 4,</p>
            <p>Punta del Este</p>
            <p>Teléfono: 914-123-456</p>
            <p>Email: info@misitio.com</p>
          </div>
          <div className="col-12 col-md-4">
            <p className="titleFooter">HORARIOS</p>
            <p>Lun-Vie: 9:00 - 18:00</p>
            <p>Sábados: 9:00 - 13:00</p>
            <p>Domingos: Cerrado</p>
          </div>
          <div className="col-12 col-md-4">
            <p className="titleFooter">AYUDA</p>
            <p>Envíos y devoluciones</p>
            <p>Política de privacidad</p>
            <p>FAQ</p>
          </div>
          <div className="col-12">
            <p className="titleFooter">SUSCRÍBITE</p>
            <form action="">
              <input
                className="inputEmail"
                type="email"
                placeholder="Ingrese su correo electrónico"
              />
              <button className="btnUnirse">Unirse</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
