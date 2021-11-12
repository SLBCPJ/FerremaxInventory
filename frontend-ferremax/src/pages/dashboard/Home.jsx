import React from "react";
import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import DeveloperTeam from "./img/programmers.svg"
const Home = () => {
  return (
    <React.Fragment>
      <div id="wrapper">

        {/* <!-- Sidebar --> */}
        <SideBar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">

            {/* <!-- Topbar --> */}
            <TopBar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Integrantes del proyecto</h1>
              </div>

              {/* Content page */}
              {/* <!-- Content Row --> */}
              <div class="row">
                {/* <div class="col-lg-6 mb-4">
                  <div class="card shadow-lg border-0 rounded-lg">
                    <div class="card-header">
                      <h4
                        class="
                        mb-0
                        m-0
                        text-primary
                      "
                      >
                        Alcance
                      </h4>
                    </div>
                    <div class="card-body">
                      <p>
                        FerreMax es una aplicación web que implementa una forma o método organizado de llevar el inventario de los productos que ofrecen. <br /> En este aplicativo, el administrador del sistema de información puede gestionar la información correspondiente a los usuarios de la ferretería: registrar actualizar, eliminar, consultar y listar usuarios que interactúan con la herramienta; así mismo con los productos que se encuentran en su stock (crear, actualizar, consultar y eliminar producto).
                      </p>
                    </div>
                  </div>
                </div> */}
                <div class="col-6">
                  <div class="card shadow-lg border-0 rounded-lg">
                    <div class="card-header">
                      <h4
                        class="
                        mb-0
                        m-0
                        text-primary
                      "
                      >
                        Equipo de desarrollo
                      </h4>
                    </div>
                    <div class="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col">
                          <ul>
                            <li>Daniela Bedoya Poveda</li>
                            <li>Julian Alejandro Garcia Rubio</li>
                            <li>Yimy Cohetata Pedraza</li>
                            <li>Jaiber Daivison Nova restrepo</li>
                            <li>Nayib Xavier Patron Diaz</li>
                          </ul>
                        </div>
                        <div className="col" >
                          <img src={DeveloperTeam} alt="Programadores" width="300" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
